rm -rf */node_modules &&
for d in */; do cd "$d"; yarn; cd ..; done
