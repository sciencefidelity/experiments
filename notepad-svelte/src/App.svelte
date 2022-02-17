<script lang="ts">
  let html = ""
  let text = ""
  $: charCount=text.length
  $: wordCount=text.split(" ").filter(e => e.length !== 0).length
</script>

<div id="app">
  <div
    class="textbox"
    contenteditable="true"
    bind:textContent={text}
    bind:innerHTML={html}
  ></div>
  <div class="textbox">{@html html}</div>
  <div class="grid">
    <div class="inline">Characters: {charCount}</div>
    <div class="inline">Words: {wordCount}</div>
  </div>
</div>
