const observer = new ResizeObserver(entries => {
  window.parent.postMessage({
    type: 'resize',
    data: {
      width: document.body.scrollWidth,
      height: document.body.scrollHeight,
    },
  }, "*");
});
observer.observe(document.body);