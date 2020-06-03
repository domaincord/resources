<template lang="pug">
.welcome
  main
    h1.text-black.font-bold.text-xl.mb-2 What is&nbsp;
      span 💎 Domainer Services?
    p Domainer Services is a goto place for domain name investors and digital marketers to find new resources and more. As a beginner, it's sometimes not easy to find what you need since you don't know where to look for what.
    p Therefore we created this project to have the most common and best resources for beginners and veterans in one place — kind of like a bookmarks list for all things digital real estate, containing only the best gems out there.
    p If you want to add your gem, go ahead and open a pull request on GitHub (click on that octocat at the top right corner).
    p By the way, this project lives by getting shared; if you find this worthy, please share it with others.
    
    p.muted Made with love by
    p.contributors &nbsp;
      a(href="https://twitter.com/crocdomains") @crocdomains&nbsp;
      span and&nbsp;
      a(href="https://domaincord.org") Domaincord Community

    p.muted Forked from
    p.contributors &nbsp;
      a(href="https://webgems.io/") Webgems.io,&nbsp;
      span Used with permission&nbsp;


</template>

<style lang="scss" scoped>
.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.muted {
  font-size: 0.8rem;
  opacity: 0.5;
  margin-top: 3rem;
  margin-bottom: 0;
}

.contributors {
  margin-top: 0;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50%;
}

@media (max-width: 800px) {
  main {
    max-width: 90%;
  }
}
</style>

