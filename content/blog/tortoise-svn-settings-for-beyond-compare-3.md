---
id: 7232842a-5fe6-53f5-88f0-73abc0e0568d
title: Tortoise SVN Settings for Beyond Compare 3
plantedAt: 2009-04-13
lastTendedAt: 2009-04-13
tags:
  - blog
---
> [!warning] Archived Content
> [github.com/chadly](https://github.com/chadly/chadly.net)

This is for future reference for me – for some reason this is a huge pain in the ass for me to find whenever I need it.

Here is the official documentation on how to [integrate BC3 with TortoiseSVN](http://www.scootersoftware.com/support.php?c=kb_vcs.php).

Here are my settings (on 64 bit machine):

#### Diff Viewer

```bash
"C:\Program Files (x86)\Beyond Compare 3\BComp.exe" %base %mine /title1=%bname /title2=%yname /leftreadonly
```

Put the SAME THING for both "comparing different revisions of files" and "comparing different revisions of properties".

#### Merge Tool

```bash
"C:\Program Files (x86)\Beyond Compare 3\BComp.exe" %mine %theirs %base %merged /title1=%yname /title2=%tname /title3=%bname /title4=%mname
```