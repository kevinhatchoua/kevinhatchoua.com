#!/usr/bin/env python3
"""Re-export core sketchbook heroes from source scans (orientation + max edge)."""

from __future__ import annotations

import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ASSETS = Path.home() / ".cursor/projects/Users-khatchou-Cursor-prototypes-kevinhatchoua-com/assets"
IMG = ROOT / "public/images/work"
MAX_EDGE = 2000

DOODLES = [
	{
		"source": "Screenshot_2026-10-12_at_11.13.48-52cd1745-24eb-42ef-b64b-5faf4525bd1e.jpg",
		"dest": "octo-pineapple-doodle.jpg",
	},
	{
		"source": "Screenshot_2026-10-12_at_11.15.01-5ea5655f-b768-4081-acd2-398e004bd9a2.jpg",
		"dest": "bird-nest-snake-doodle.jpg",
	},
	{
		"source": "Screenshot_2026-10-12_at_11.14.02-64bc811f-f5f6-41ce-bffe-d20cd1e90887.jpg",
		"dest": "contour-portrait-doodle.jpg",
	},
	{
		"source": "Screenshot_2026-10-12_at_11.14.14-f7553340-c6ce-4d72-bd9a-e6761a2add87.jpg",
		"dest": "descent-reaching-hands-doodle.jpg",
	},
	{
		"source": "Screenshot_2026-10-12_at_11.14.21-74f47a0b-0858-490c-a23e-0f672e36d1a6.jpg",
		"dest": "windswept-sakura-doodle.jpg",
	},
	{
		"source": "Screenshot_2026-10-12_at_11.14.42-307c1884-6fe1-402e-8d93-eb292726118f.png",
		"dest": "kobe-24-basketball-doodle.png",
	},
]


def export_one(src: Path, dest: Path) -> None:
	dest.parent.mkdir(parents=True, exist_ok=True)
	tmp = dest.with_suffix(dest.suffix + ".tmp")
	subprocess.run(["cp", str(src), str(tmp)], check=True)
	subprocess.run(["sips", "-Z", str(MAX_EDGE), str(tmp)], check=True)
	subprocess.run(["sips", "-s", "format", "jpeg" if dest.suffix == ".jpg" else "png", str(tmp)], check=True)
	tmp.replace(dest)


def main() -> None:
	processed = []
	for row in DOODLES:
		src = ASSETS / row["source"]
		if not src.exists():
			raise FileNotFoundError(src)
		dest = IMG / row["dest"]
		export_one(src, dest)
		processed.append(row["dest"])
	print(json.dumps({"rebooted": processed}, indent=2))


if __name__ == "__main__":
	main()
