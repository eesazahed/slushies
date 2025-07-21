<script>
  let bgToggled = false;
  const bgImageUrl = "/images/slushies.png";
  const toggleHeaderBg = () => bgToggled = !bgToggled;
</script>

<style>
  #bg-overlay {
    transition: opacity 0.5s ease-in-out;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  .pulse {
    animation: pulse 0.75s ease-in-out infinite;
  }
</style>

<svelte:head>
  <title>Slushies, a Flask YSWS!</title>
  <link rel="preload" as="image" href="/images/slushies.png">
</svelte:head>


<div class="md:bg-green-200 md:pb-24">
  <header class="relative p-8 min-h-96 text-center bg-gradient-to-t from-lime-500 to-emerald-400 flex flex-col items-center justify-center overflow-hidden">
    <div
      id="bg-overlay"
      class="absolute inset-0 bg-center bg-cover pointer-events-none"
      style="opacity: {bgToggled ? 1 : 0}; background-image: url({bgImageUrl});">
    </div>

    <div class="text-white relative z-10 my-16">
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <h1 on:click={toggleHeaderBg} class="cursor-pointer text-6xl md:text-8xl font-bold mb-8">Slushies</h1>
      <h2 class="text-4xl font-bold mb-8">A Flask YSWS</h2>
      <p class="text-lg max-w-3xl mx-auto font-bold">Build something cool with Flask, ship your project, and get rewarded!</p>
      <a href="https://forms.fillout.com/t/8rVxgL1yHCus" target="_blank" rel="noopener noreferrer" class="pulse mt-16 inline-block text-4xl font-bold px-12 py-8 rounded-3xl text-white bg-sky-400 hover:bg-sky-600 transition">Click to RSVP!</a>
      <!-- <div class="mt-16 grid grid-cols-2 gap-6">
        <a href="#" target="_blank" rel="noopener noreferrer" class="inline-block px-9 py-4 rounded-3xl text-white bg-cyan-600 hover:bg-cyan-500 transition">Submit YSWS</a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="inline-block px-9 py-4 rounded-3xl text-white bg-cyan-600 hover:bg-cyan-500 transition">Join Slack</a>
        <a href="#requirements" class="inline-block px-9 py-4 rounded-3xl text-white bg-cyan-600 hover:bg-cyan-500 transition">Requirements</a>
        <a href="#faq" class="inline-block px-9 py-4 rounded-3xl text-white bg-cyan-600 hover:bg-cyan-500 transition">FAQ</a>
      </div> -->
    </div>
  </header>

  <main class="max-w-4xl md:mt-24 mx-auto px-16 py-16 bg-white border-3 border-green-300 rounded-3xl">
    <section class="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
      <div class="p-12 bg-sky-100 border border-3 border-sky-300 rounded-3xl">
        <h2 class="text-3xl font-semibold mb-4">You Ship</h2>
        <p class="mb-2 text-base font-medium">A Flask web app with at least 3 routes. Host it on Nest.</p>
        <p class="text-sm">(don't worry I'll make some tutorials)</p>
      </div>
      <div class="p-12 bg-sky-100 border border-3 border-sky-300 rounded-3xl">
        <h2 class="text-3xl font-semibold mb-4">We Ship</h2>
        <p class="mb-2 text-base font-medium">$5 reward for food vendors</p>
        <p class="text-sm">(Get $10 if you implement CRUD with SQLite, CSV, Postgres, or similar)</p>
      </div>
    </section>

    <section class="pt-8 mb-16 max-w-3xl mx-auto" id="requirements">
      <h2 class="text-3xl font-semibold mb-8">Requirements</h2>
      <ul class="list-disc list-inside space-y-3 text-base">
        <li>Build a Flask web app with at least 3 routes</li>
        <li>Commit your code frequently on GitHub</li>
        <li>Describe your project in a README.md file and include some screenshots</li>
        <li>Host the app on Nest (deployment tutorial provided)</li>
        <li>Implement basic CRUD functionality using SQLite, CSV, Postgres, or similar for higher rewards</li>
        <li>Your project should be functional, somewhat styled, and easy to use</li>
      </ul>
      <p class="text-xl font-semibold mt-12">Additionally, please note that:</p>
        <ul class="list-disc list-inside mt-6  space-y-3 text-base">
        <li>You must be in high school or middle school</li>
        <li>You started working on this project recently. No submitting old projects.</li>
        <li>You haven't gotten a Slushies grant before. If you have, maybe try some other <a href="https://ysws.hackclub.com" target="_blank" rel="noopener noreferrer" class="underline">YSWS</a></li>
        <li>This is a beginner YSWS, I don't want to see any AI made projects</li>
        <li>If you do use AI a bit for inspiration/debugging, make sure to include it in your README</li>
      </ul>
    </section>

    <section class="pt-8 mb-16 max-w-3xl mx-auto" id="faq">
      <h2 class="text-3xl font-semibold mb-8">Frequently Asked Questions</h2>
      <dl class="space-y-8">
        <div>
          <dt class="font-semibold text-lg">Where can I ask for help?</dt>
          <dd class="mt-1 text-base">
            Join <a href="https://hackclub.slack.com" target="_blank" rel="noopener noreferrer" class="underline">#slushies</a> on Hack Club Slack or email <a href="mailto:eesa@hackclub.app" class="underline">eesa@hackclub.app</a>
          </dd>
        </div>
        <div>
          <dt class="font-semibold text-lg">I don't have any good project ideas!</dt>
          <dd class="mt-1 text-base">
            Think about your interests or hobbies. If you like gaming, make a site about of some of the video games you like. If you"re into reading, make a site where users can post book reviews. The list goes on...
          </dd>
        </div>
        <div>
          <dt class="font-semibold text-lg">Are there example projects?</dt>
          <dd class="mt-1 text-base">
            I made a demo Flask project with CRUD on <a href="https://github.com/eesazahed/flask-movies" target="_blank" rel="noopener noreferrer" class="underline">GitHub</a>
          </dd>
        </div>        
        <div>
          <dt class="font-semibold text-lg">Is there a deadline?</dt>
          <dd class="mt-1 text-base">
            It is to be determined
        </dd>
        </div>
      </dl>
    </section>

      <section class="pt-8 mb-16 max-w-3xl mx-auto" id="faq">
      <h2 class="text-3xl font-semibold mb-8">Guides</h2>
      <dl class="space-y-8">
        <div>
          <dt class="font-semibold text-lg">SQLite with Python</dt>
          <dd class="mt-1 text-base">
            Read this <a href="https://www.freecodecamp.org/news/sqlite-python-beginners-tutorial/" target="_blank" rel="noopener noreferrer" class="underline">article</a> I wrote
          </dd>
        </div>
        <div>
          <dt class="font-semibold text-lg">Host a Flask app on Nest</dt>
          <dd class="mt-1 text-base">
            Take a look at this <a href="https://github.com/eesazahed/flask-movies/blob/main/README.md" target="_blank" rel="noopener noreferrer" class="underline">guide</a> I made
          </dd>
        </div>
      </dl>
    </section>

    <footer class="pt-8 text-sm text-center text-gray-600">
      <p>
        Questions? Join <a href="https://hackclub.slack.com" target="_blank" rel="noopener noreferrer" class="underline">#slushies</a> on Hack Club Slack or email 
        <a href="mailto:eesa@hackclub.app" class="underline">eesa@hackclub.app</a>
      </p>
    </footer>
  </main>
</div>
