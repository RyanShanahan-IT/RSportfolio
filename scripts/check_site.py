"""Check static-site integrity without third-party dependencies.

Run from any directory: python scripts/check_site.py
"""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import sys

ROOT = Path(__file__).resolve().parents[1]


class SiteParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = []
        self.references = []
        self.errors = []
        self.h1 = 0
        self.main = 0
        self.viewport = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        self.h1 += tag == 'h1'
        self.main += tag == 'main'
        if tag == 'meta' and attrs.get('name') == 'viewport':
            self.viewport = 'width=device-width' in attrs.get('content', '')
        for key in ('href', 'src', 'poster'):
            if attrs.get(key):
                self.references.append(attrs[key])
        if tag == 'img':
            for key in ('alt', 'width', 'height'):
                if not attrs.get(key):
                    self.errors.append(f'Image missing {key}: {attrs.get("src")}')
        if tag == 'video':
            if attrs.get('preload') not in ('none', 'metadata'):
                self.errors.append('Video must avoid automatic full preload')
            if not attrs.get('poster') or 'controls' not in attrs:
                self.errors.append('Video needs a poster and controls')
        if any(key.startswith('on') for key in attrs):
            self.errors.append(f'Inline event handler on {tag}')


def main():
    parser = SiteParser()
    parser.feed((ROOT / 'index.html').read_text(encoding='utf-8'))
    errors = parser.errors
    if parser.h1 != 1 or parser.main != 1 or not parser.viewport:
        errors.append('Expected one h1, one main landmark and a mobile viewport')
    if len(parser.ids) != len(set(parser.ids)):
        errors.append('Duplicate HTML IDs')
    local_files = set()
    for reference in parser.references:
        if '\\' in reference:
            errors.append(f'Backslash in URL: {reference}')
        parsed = urlsplit(reference)
        if parsed.scheme or parsed.netloc:
            continue
        if not parsed.path and parsed.fragment and unquote(parsed.fragment) not in parser.ids:
            errors.append(f'Missing anchor: {reference}')
        if parsed.path:
            path = (ROOT / unquote(parsed.path)).resolve()
            if not path.is_relative_to(ROOT) or not path.is_file():
                errors.append(f'Missing or invalid local file: {reference}')
            local_files.add(path)
    cv = ROOT / 'documents/Ryan-Shanahan-CV.pdf'
    if not cv.read_bytes().startswith(b'%PDF-'):
        errors.append('CV is not a PDF')
    if errors:
        print('\n'.join(errors), file=sys.stderr)
        return 1
    print(f'PASS: {len(parser.references)} references, {len(local_files)} local files, '
          f'{len(parser.ids)} unique anchors; images, video controls and PDF checked.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
