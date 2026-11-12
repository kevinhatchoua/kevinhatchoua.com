#!/usr/bin/env python3
"""Copy art upload batch into public/images/work and write Art work entries."""

from __future__ import annotations

import json
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ASSETS = Path.home() / ".cursor/projects/Users-khatchou-Cursor-prototypes-kevinhatchoua-com/assets"
MANIFEST = ROOT / "scripts/ingest-art-uploads.json"


def main() -> None:
	items = json.loads(MANIFEST.read_text())
	work_dir = ROOT / "src/content/work"
	img_dir = ROOT / "public/images/work"

	for item in items:
		src = ASSETS / item["source_filename"]
		if not src.exists():
			raise FileNotFoundError(src)

		dest = img_dir / item["dest_path"]
		dest.parent.mkdir(parents=True, exist_ok=True)
		shutil.copy2(src, dest)

		slug = item["slug"]
		md_path = work_dir / f"{slug}.md"
		desc = item["description"].replace('"', '\\"')
		tags_yaml = "\n".join(f"  - {t}" for t in item["tags"])
		hero = f"/images/work/{item['dest_path']}"

		if item["action"] == "new":
			body = f"""---
title: {item['title']}
description: "{desc}"
year: {item['year']}
role: Illustrator
category: Art
order: {item['order']}
heroImage: {hero}
tags:
{tags_yaml}
draft: false
---
## Process

{item['description']}.
"""
			md_path.write_text(body)
		elif slug == "dj-dream-fund":
			text = md_path.read_text()
			lines = [
				f'description: "{desc}"' if line.startswith("description:") else line
				for line in text.splitlines()
			]
			md_path.write_text("\n".join(lines) + "\n")

	print(f"Ingested {len(items)} images.")


if __name__ == "__main__":
	main()
