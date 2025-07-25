# Getting started with Flask

Here's how to get started with Flask. This assumes you have [Python](https://www.python.org/downloads/) installed and working on your machine.

### Setup

Create an empty directory to code in and have your terminal ready.

<img src="https://raw.githubusercontent.com/eesazahed/slushies/refs/heads/main/static/images/vscode.png" width="300"><br />

Create a new file called `requirements.txt` and in that file simply write: `flask`

In the terminal, run `pip install -r requirements.txt`. If that doesn't work, try `pip3 install -r requirements.txt`

Create a new file called `app.py`. The current file structure of the project should be:

[inesrt files.png]

Within this file, proceed to write the following:

```
from flask import Flask, render_template

app = Flask(__name__)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
```

### Routes

The next step is to write a route. This is what we will need to eventually display HTML in the browser. Below `app = Flask(__name__)`, write:

```
@app.route('/')
def index():
    return render_template('index.html')
```

If you go into the terminal and run `python3 app.py`, you should see:

```
* Serving Flask app 'app'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://127.0.0.1:5000
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
```

Going to http://127.0.0.1:5000 results in seeing a page stating: _"TemplateNotFound... jinja2.exceptions.TemplateNotFound: index.html"_

[insert templatenotfound.png]

This is expected, as we haven't provided an index.html template for Flask to render. In the current directory you're working in, create a new folder called `templates` and there create a new HTML file called `index.html`.

Your current file structure should be:

[insert files.png]

I'll then write some basic HTML in this new file:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>flask app</title>
  </head>
  <body>
    <p>hi my name is eesa</p>
  </body>
</html>
```

I saved my file and ran `python3 app.py` in the terminal. Now, when I go to http://127.0.0.1:5000 I see _"hi my name is eesa"_.

Now here's something cool about Flask. I can pass Python variables into the HTML with this really cool method called [Jinja](https://jinja.palletsprojects.com/en/stable/nativetypes/#examples) templateing.

In my `index.html` file, I'll edit the <p> tag to instead display:

<p>hi my name is {{ user_name }}</p>

I'll then go to `app.py` file and edit the `index()` function to include a new variable, `user_name`, like so:

```
@app.route('/')
def index():
    user_name = "EESAAAAAA"
    return render_template('index.html')
```

To include this variable when rendering the HTML, I'll just include it in the `render_template()` function like so:

```
return render_template('index.html', user_name=user_name)
```

After reloading the site in the browser, I now see _"hi my name is EESAAAAAA"_

I can add another route by adding it below the `index()` function:

```
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    user_name = "EESAAAAAA"
    return render_template('index.html', user_name=user_name)


@app.route('/testing')
def testing():
    user_name = "TESTING"
    return render_template('index.html', user_name=user_name)


if __name__ == '__main__':
    app.run(port=5000, debug=True)
```

Notice how I named the new function `testing()`? It's important to make sure that all the routes have unique function names. With that being said, I can now go to http://127.0.0.1:5000/testing and see _"hi my name is TESTING"_.

### Templates

What if I want more html templates for more routes? As the site gets bigger, a great way to make this easier to manage is by creating a base template. In the templates directory, create a new file called `base.html`. Within this new file, proceed to write:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>{% block title %}My app{% endblock %}</title>
  </head>
  <body>
      <main>{% block content %}{% endblock %}</main>
  </body>
</html>
```

I'll then edit `index.html` to now become:

```
{% extends "base.html" %}

{% block title %}
Hi!
{% endblock %}

{% block content %}
<p>hi there my name is {{ user_name }}</p>
{% endblock %}
```

I'll make another HTML template called `testing.html` in the same directory, with the content being:

```
{% extends "base.html" %}

{% block title %}
Testing!
{% endblock %}

{% block content %}
<h2>hi, {{ user_name }}, this is the testing site</h2>
{% endblock %}
```

Now, I'll go back to `app.py` and make the following change from

```
return render_template('index.html', user_name=user_name)
```

to

```
return render_template('testing.html', user_name=user_name)
```

Now, taking a look at http://127.0.0.1:5000/testing, I see _"hi, TESTING, this is the testing site"_

### Adding CSS

To add CSS, I'll create a new empty directory called `static`, and there I'll create a new file called`main.css`. The current file structure of the project should be:

[insert files2.png]

We can change the project's font in `main.css` by writing:

```
* {
  font-family: sans-serif;
}
```

However, the HTML files won't be able to use this CSS until we add this line to `base.html`:

```
<head>
  <title>My app - {% block title %}{% endblock %}</title>
  <link
    rel="stylesheet"
    href="{{ url_for('static', filename='main.css') }}"
  />
</head>
```

Now if I go to http://127.0.0.1:5000/ I should see the styles in `main.css` properly reflected on the HTML page like so:

[insert html.png]

### That's it for now!

And that concludes our tutorial! For a more in-depth tutorial, I hihgly recommend you to watch [Harvard's CS50x's Flask lesson](https://cs50.harvard.edu/x/weeks/9/).
