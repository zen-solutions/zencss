var preElements = document.querySelectorAll('pre.copy-text');

preElements.forEach(function (textBox)
{
	var copyButton = document.createElement('button');
	var copyText = textBox.innerText;

	textBox.appendChild(copyButton);

	copyButton.addEventListener('click', function (event)
	{
		navigator.clipboard.writeText(copyText)
			.then(() =>
			{

				copyButton.style.cssText = 'background-color: green !important; background-image: url("https://zencss.com/docs/images/ui/copied.png") !important;';
				setTimeout(function unCopy()
				{
					copyButton.style.cssText = 'background-color: #ccc !important; background-image: url("https://zencss.com/docs/images/ui/copy.png") !important;';
				}, 1500);
			})
			.catch(err =>
			{
				alert('Not enough permissions to copy text');
			});
	});
});