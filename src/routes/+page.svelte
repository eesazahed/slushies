<style>
  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  .pulse {
    animation: pulse 0.75s ease-in-out infinite;
  }

  .card {
    position: relative;
    overflow: hidden;
    background: none;
  }

  .card::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .card::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .card * {
    position: relative;
    z-index: 2;
  }

  #coding-card {
    background: url("images/coding.png") center/cover no-repeat;
  }

  #slushies-card {
    background: url("images/slushies.png") center/cover no-repeat;
  }
</style>

<svelte:head>
  <title>Slushies, a Flask YSWS!</title>
  <link rel="preload" as="image" href="/images/logo.png">
</svelte:head>

<div class="md:bg-green-300 md:pb-24">
  <header
    class="relative p-8 min-h-96 text-center bg-gradient-to-b from-purple-700 to-green-200 md:to-green-300 flex flex-col items-center justify-center overflow-hidden"
  >
    <div class="text-white my-16">
      <img src="/images/logo.png" alt="Slushies" class="h-108 mb-8 mx-auto" />
      <h2 class="text-6xl font-bold mb-8 italic">
        A
        <a
          href="https://flask.palletsprojects.com/en/stable/"
          target="_blank"
          rel="noopener noreferrer"
          class="underline"
          >Flask</a
        >
        YSWS
      </h2>
      <p class="text-3xl max-w-3xl mx-auto font-medium">
        Build something cool with Flask, ship your project, and get rewarded!
      </p>
      <a
        href="https://forms.fillout.com/t/8rVxgL1yHCus"
        target="_blank"
        rel="noopener noreferrer"
        class="pulse mt-16 inline-block text-4xl font-bold px-12 py-8 rounded-3xl text-white bg-sky-400 hover:bg-sky-600 transition"
        >Click to RSVP!</a
      >
      <!-- <div class="mt-16 grid grid-cols-2 gap-6">
          <a href="#" target="_blank" rel="noopener noreferrer" class="inline-block px-9 py-4 rounded-3xl text-white bg-cyan-600 hover:bg-cyan-500 transition">Submit YSWS</a>
          <a href="#" target="_blank" rel="noopener noreferrer" class="inline-block px-9 py-4 rounded-3xl text-white bg-cyan-600 hover:bg-cyan-500 transition">Join Slack</a>
          <a href="#requirements" class="inline-block px-9 py-4 rounded-3xl text-white bg-cyan-600 hover:bg-cyan-500 transition">Requirements</a>
          <a href="#faq" class="inline-block px-9 py-4 rounded-3xl text-white bg-cyan-600 hover:bg-cyan-500 transition">FAQ</a>
        </div> -->
    </div>
  </header>

  <main
    class="max-w-4xl mx-auto px-16 py-16 bg-green-200 md:border-3 md:border-green-400 md:rounded-3xl"
  >
    <section
      class="mb-8 grid grid-cols-1 md:grid-cols-2 gap-10 text-center text-white"
    >
      <div
        id="coding-card"
        class="card p-12 border border-3 border-sky-300 rounded-3xl transition duration-250 cursor-pointer hover:border-sky-500 hover:scale-105"
      >
        <h2 class="text-4xl font-medium mb-4">You Ship</h2>
        <p class="mb-2 text-xl font-medium">
          Your own Flask app on Nest!
        </p>
      </div>
      <div
        id="slushies-card"
        class="card p-12 border border-3 border-sky-300 rounded-3xl transition duration-250 cursor-pointer hover:border-sky-500 hover:scale-105"
      >
        <h2 class="text-4xl font-medium mb-4">We Ship</h2>
        <p class="mb-2 text-lg font-medium">$5 for a slushie</p>
        <p class="text-base">See how to earn $10 below</p>
      </div>
    </section>

    <section class="pt-8 mb-8 max-w-3xl mx-auto" id="requirements">
      <h2 class="text-4xl font-medium mb-6">Requirements</h2>
      <div class="flex bg">
        <ul class="list-disc list-inside mt-4 space-y-1 text-lg">
          <li>Build a Flask web app with at least 3 routes</li>
          <li>
            Your project should be unique, functional, And somewhat styled
          </li>
          <li>
            While coding, commit your work at least once an hour on GitHub
          </li>
          <li>
            Describe your project (and add screenshots) in a README.md file
          </li>
          <li>
            Log at least 2 hours on
            <a
              href="https://hackatime.hackclub.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="underline"
              >Hackatime</a
            >
          </li>
          <li>
            Host the app on
            <a
              href="https://hackclub.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="underline"
              >Nest</a
            >
            (deployment tutorial provide below)
          </li>
        </ul>
        <img
          src="/images/red-blue-slushy.png"
          alt="Red and blue slushy"
          class="w-32 ml-16 hidden md:block -mt-8"
        />
      </div>
      <p class="text-xl font-medium mt-12">
        For higher rewards, log a minimum of 4 hours on Hackatime and implement
        at least one:
      </p>
      <ul class="list-disc list-inside mt-4 space-y-1 text-lg">
        <li>
          Basic CRUD functionality using SQLite, CSV, Postgres, or something
          similar
        </li>
        <li>A functional user authentication system and protected routes</li>
        <li>
          Connect and successfully fetch data from an external API (weather,
          stocks, etc.)
        </li>
        <li>
          Aesthetically pleasing responsive layout that works on mobile and
          desktop
        </li>
        <li>And you'll earn 🤑 $10 🤑</li>
      </ul>
      <p class="text-xl font-medium mt-12">Additionally, please note that:</p>
      <ul class="list-disc list-inside mt-4 space-y-1 text-lg">
        <li>You must be in high school or middle school</li>
        <li>You started working on this project recently</li>
        <li>Your first commit must be made after this YSWS was announced</li>
        <li>
          You haven't gotten a Slushies grant before. If you have, maybe try
          some other
          <a
            href="https://ysws.hackclub.com"
            target="_blank"
            rel="noopener noreferrer"
            class="underline"
            >YSWS</a
          >
        </li>
        <li>
          This is a beginner YSWS, I don't want to see any AI made projects
        </li>
        <li>
          If you do use AI a bit for inspiration/debugging, make sure to include
          it in your README
        </li>
      </ul>
    </section>

    <section class="pt-8 mb-8 max-w-3xl mx-auto" id="faq">
      <h2 class="text-4xl font-medium mb-6">Frequently Asked Questions</h2>
      <dl class="space-y-6">
        <div>
          <dt class="font-medium text-lg">Where can I ask for help?</dt>
          <dd class="mt-1 text-lg">
            Join
            <a
              href="https://hackclub.slack.com"
              target="_blank"
              rel="noopener noreferrer"
              class="underline"
              >#slushies</a
            >
            on Hack Club Slack or email
            <a href="mailto:eesa@hackclub.app" class="underline"
              >eesa@hackclub.app</a
            >
          </dd>
        </div>
        <div>
          <dt class="font-medium text-lg">
            I don't have any good project ideas!
          </dt>
          <dd class="mt-1 text-lg">
            Think about your interests or hobbies. If you like gaming, make a
            site about of some of the video games you like. If you're into
            reading, make a site where users can post book reviews, and etc.
          </dd>
        </div>
        <div>
          <dt class="font-medium text-lg">Are there example projects?</dt>
          <dd class="mt-1 text-lg">
            I made a demo Flask project with CRUD on
            <a
              href="https://github.com/eesazahed/flask-movies"
              target="_blank"
              rel="noopener noreferrer"
              class="underline"
              >GitHub</a
            >.
            <br />
            Here is a slightly more advanced
            <a
              href="https://github.com/eesazahed/flask-auth"
              target="_blank"
              rel="noopener noreferrer"
              class="underline"
              >project</a
            >
            with basic user authentication.
          </dd>
        </div>
        <div>
          <dt class="font-medium text-lg">Is there a deadline?</dt>
          <dd class="mt-1 text-lg">
            Saturday, <b>August 23, 2025</b> at 12:00 AM (midnight) Central
            Daylight Time
          </dd>
        </div>
        <div>
          <dt class="font-medium text-lg">
            Can I "double dip" with another YSWS?
          </dt>
          <dd class="mt-1 text-lg">Unfortunately, this is not possible :(</dd>
        </div>
      </dl>
    </section>

    <section class="pt-8 mb-16 max-w-3xl mx-auto" id="faq">
      <h2 class="text-4xl font-medium mb-6">Guides</h2>
      <dl class="space-y-6">
        <div>
          <dt class="font-medium text-lg">Getting started with Flask</dt>
          <dd class="mt-1 text-lg">
            See how to make a simple Flask app
            <a
              href="https://github.com/eesazahed/slushies/blob/main/TUTORIAL.md"
              target="_blank"
              rel="noopener noreferrer"
              class="underline"
              >here</a
            >
          </dd>
        </div>
        <div>
          <dt class="font-medium text-lg">SQLite with Python</dt>
          <dd class="mt-1 text-lg">
            Learn how to perform basic CRUD (create, read, update, delete)
            operations
            <a
              href="https://www.freecodecamp.org/news/sqlite-python-beginners-tutorial/"
              target="_blank"
              rel="noopener noreferrer"
              class="underline"
              >here</a
            >
          </dd>
        </div>
        <div>
          <dt class="font-medium text-lg">Host a Flask app on Nest</dt>
          <dd class="mt-1 text-lg">
            This part can be a bit tricky, so take a look at this
            <a
              href="https://github.com/eesazahed/flask-movies/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              class="underline"
              >guide</a
            >
            I wrote
          </dd>
        </div>
      </dl>
    </section>

    <footer class="pt-8 text-base text-center text-gray-600">
      <p>
        Questions? Join
        <a
          href="https://hackclub.slack.com"
          target="_blank"
          rel="noopener noreferrer"
          class="underline"
          >#slushies</a
        >
        on Hack Club Slack or email
        <a href="mailto:eesa@hackclub.app" class="underline"
          >eesa@hackclub.app</a
        >
      </p>
    </footer>
  </main>
</div>
