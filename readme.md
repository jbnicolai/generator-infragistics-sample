# Infragistics Code Sample Generator

This generator includes files you'll find helpful in getting started publishing a sample on GitHub. The resources created by the generator include:

1. **third-party-notices.md**: A disclosure which itemizes the licenses for each library used in your sample. While the sample you make available on GitHub may be an open license libraries like Ignite UI and others may be more restrictive so we want to document that fact clearly.

2. **license.md**: This is a stock [MIT](http://en.wikipedia.org/wiki/MIT_License) license ready for you to include in your repository. If this license is inappropriate for your needs make sure you overwrite this file with the correct license.

3. **readme.md**: This file acts as the base `readme.md` file you will use in your repository. This file includes some basic structure and content that you may find useful as you create your repository. Feel free to remove any of the stock text or structure as you see fit. *This is here as a time-saving tool for you!* You'll want to rename this file to `readme.md` and begin your work from there.

4. **index.html**: The `index.html` file is stubbed out with references to the trial version of [Ignite UI](http://igniteui.com) and CDN references to libraries like jQuery, Modernizr, Bootstrap and Font Awesome. There is also a `meta name="viewport"` tag in the `head`. If you do not want your sample to be responsive then you might want to remove that element.

---
# Tips
## Using Raw Files
Whether you are attempting to directly access an image loaded into your repository or if you want to run the code in your sample directly off GitHub - you need to be aware of how to use raw GitHub files.

Once you have the URL of a file that is pushed to GitHub, for instance:

[http://github.com/Infragistics-Blogs/iggrid-column-templates/blob/master/index.html](http://github.com/Infragistics-Blogs/iggrid-column-templates/blob/master/index.html)

To get to the raw file (or in this case a file you can run directly in the browser) then you need to change the domain to `rawgithub.com` and remove the `/blob` segment from the URL:

[http://rawgithub.com/Infragistics-Blogs/iggrid-column-templates/blob/index.html](http://rawgithub.com/Infragistics-Blogs/iggrid-column-templates/master/index.html)

**Note:** You'll often want to change the protocol from `https` to `http`.


## Data URIs for Images
In an effort to make your code more portable you may want to consider using [data URIs instead of images](http://css-tricks.com/data-uris/). You can use these in CSS or even as the value for the `src` attribute of an `img` element. [Generating code for data URIs is easy](http://websemantics.co.uk/online_tools/image_to_data_uri_convertor/). For an example of how you may want to use a data URI check out the [sample data in this sample](https://github.com/Infragistics-Blogs/iggrid-column-templates/blob/master/index.html).  