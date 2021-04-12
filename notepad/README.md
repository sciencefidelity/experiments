# Browser Notepad

A simple, lighweight browser based notepad for keeping notes on the fly. Inspired by [stackedit.io](https://stackedit.io).

This is the solution to a problem I was having while studying Russian language. I wanted to take plain text notes in the browser in order to keep word lists and sentences to study. I found that Stackedit was doing what I wanted, but almost too well. When copying links into Stackedit the html is convered to markdown, but I wanted all metadata stripped. 

## Changelog

13.03.21

- Added light/dark mode switch.
- Made responsive using css grid, right column hides on small screens.
- Added button to download a markdown file of the left text area.
- Word count, character count.

## To do

- Add basic syntax highlighting/formatting for markdown.
- Detect browser or system dark/lightmode preferences and adjust accordingly.
- Switch between serif/sans-serif/manospece font.
- Display formatted copy of the left column in the right cloumn. 

## Issues

- Firefox does not overflow the padding of the textarea. I added a large bottom padding so that when the text gets longer then the screen height you are not writing at the bottom of the screen. You could hit enter a few times to make space at the bottom, I thought paddin was a more elegent solution and works a charm in Safari and Brave.

