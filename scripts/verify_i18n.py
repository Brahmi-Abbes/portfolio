import re
import json

# Load translations by naive parsing of js/i18n.js
with open('js/i18n.js', 'r', encoding='utf-8') as f:
    js = f.read()

def extract_block(js_text, name):
    m = re.search(rf"{re.escape(name)}\s*:\s*{{", js_text)
    if not m:
        return None
    start = m.end()  # position after '{'
    depth = 1
    i = start
    while i < len(js_text):
        ch = js_text[i]
        if ch == '{':
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0:
                return js_text[start:i]
        i += 1
    return None

en_body = extract_block(js, 'en')
ar_body = extract_block(js, 'ar')

if en_body is None or ar_body is None:
    print('ERROR: could not extract en/ar translation blocks')
    raise SystemExit(1)

def parse_body(body):
    entries = {}
    # match patterns like 'key': 'value', allow escaped quotes minimally
    for m in re.finditer(r"'([^']+)':\s*'([^']*)'\s*,?", body):
        k = m.group(1)
        v = m.group(2)
        entries[k] = v
    return entries

translations = {'en': parse_body(en_body), 'ar': parse_body(ar_body)}

# Keys to verify
keys = [
    'hero.role1','hero.role2','hero.pitch',
    'about.heading','about.p1','about.p2',
    'pharmacera.summary','devdz.summary',
    'background.internTitle','background.internDetail','background.degreeTitle','background.degreeDetail'
]

print('Verifying translations presence and sample values:\n')
all_ok = True
for lang in ('en','ar'):
    print(f'Language: {lang}')
    for k in keys:
        v = translations.get(lang, {}).get(k)
        status = 'OK' if v is not None else 'MISSING'
        print(f" - {k}: {status}")
        if v is None:
            all_ok = False
    print()

# Simulate applying English translations to index.html by replacing inner content of tags with data-i18n
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

simulated = html
replacements = 0
for k,v in translations['en'].items():
    pattern = re.compile(rf'(data-i18n="{re.escape(k)}"[^>]*>)([\s\S]*?)(<)', re.IGNORECASE)
    simulated, n = pattern.subn(rf"\1{v}\3", simulated)
    replacements += n

# Check that the hero role strings appear when simulated (using en)
if translations['en'].get('hero.role1') in simulated and translations['en'].get('hero.role2') in simulated:
    print('Simulation: hero role strings were applied in generated HTML (en).')
else:
    print('Simulation: hero role strings NOT found in generated HTML (en).')
    all_ok = False

print(f'Performed {replacements} simulated replacements in HTML.')

if all_ok:
    print('\nVERIFICATION PASSED: translations present and simulation succeeded.')
else:
    print('\nVERIFICATION FAILED: some translations are missing or simulation failed.')
