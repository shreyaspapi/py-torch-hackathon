function checkconflicts() {
  local found_merge_markers="$(grep -EHlr --exclude=travis-functions.sh --exclude-dir={node_modules,vendor} '<<<<<<< HEAD|>>>>>>>' .)"
    if [ -n "$found_merge_markers" ]; then
      echo "git merge conflict markers found!"
      echo $found_merge_markers
      exit 1
    fi;
}
