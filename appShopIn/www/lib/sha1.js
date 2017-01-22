



<!DOCTYPE html>
<html lang="en" class=" is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-c07e6f4b02b556d1d85052fb3853caf84c80e6b23dcdb1ae1b00f051da1115a2.css" integrity="sha256-wH5vSwK1VtHYUFL7OFPK+EyA5rI9zbGuGwDwUdoRFaI=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-09e1c38d593bf8fc6e4c4f1b526d0184e27c433d64963942c1e8c361589f8125.css" integrity="sha256-CeHDjVk7+PxuTE8bUm0BhOJ8Qz1kljlCwejDYVifgSU=" media="all" rel="stylesheet" />
    
    
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-293f92180d0a619a750fa2b5eae9e36740f5723a59c0ec308972c70d24e834fc.css" integrity="sha256-KT+SGA0KYZp1D6K16unjZ0D1cjpZwOwwiXLHDSToNPw=" media="all" rel="stylesheet" />
    

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>jsSHA/sha1.js at master · Caligatio/jsSHA · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars1.githubusercontent.com/u/2017685?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="Caligatio/jsSHA" name="twitter:title" /><meta content="jsSHA - A JavaScript implementation of the complete Secure Hash Standard family (SHA-1, SHA-224, SHA3-224, SHA-256, SHA3-256, SHA-384, SHA3-384, SHA-512, SHA3-512, SHAKE128, and SHAKE256) as well a..." name="twitter:description" />
      <meta content="https://avatars1.githubusercontent.com/u/2017685?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="Caligatio/jsSHA" property="og:title" /><meta content="https://github.com/Caligatio/jsSHA" property="og:url" /><meta content="jsSHA - A JavaScript implementation of the complete Secure Hash Standard family (SHA-1, SHA-224, SHA3-224, SHA-256, SHA3-256, SHA-384, SHA3-384, SHA-512, SHA3-512, SHAKE128, and SHAKE256) as well a..." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    
    <meta name="request-id" content="15C8:7557:1232E6C:1DBC947:58837EBB" data-pjax-transient>

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="15C8:7557:1232E6C:1DBC947:58837EBB" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="ZGE1NjhjNmE3Y2NmNmVlMzNkYmEwOTI4MGEzZTAzYWI5ZjU3YzE1ZmI1NzMzNzBhNmJkNzhjZTM2YzU3NWY5Znx7InJlbW90ZV9hZGRyZXNzIjoiMTQ3LjgzLjIwMS4xMDciLCJyZXF1ZXN0X2lkIjoiMTVDODo3NTU3OjEyMzJFNkM6MURCQzk0Nzo1ODgzN0VCQiIsInRpbWVzdGFtcCI6MTQ4NTAxMjY3MCwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="f962ccf555f99327c2dcc075ac749f746f003eb4">

    <meta http-equiv="x-pjax-version" content="94a9cc48ead92329faac49833ac14041">
    

      
  <meta name="description" content="jsSHA - A JavaScript implementation of the complete Secure Hash Standard family (SHA-1, SHA-224, SHA3-224, SHA-256, SHA3-256, SHA-384, SHA3-384, SHA-512, SHA3-512, SHAKE128, and SHAKE256) as well as HMAC">
  <meta name="go-import" content="github.com/Caligatio/jsSHA git https://github.com/Caligatio/jsSHA.git">

  <meta content="2017685" name="octolytics-dimension-user_id" /><meta content="Caligatio" name="octolytics-dimension-user_login" /><meta content="5134724" name="octolytics-dimension-repository_id" /><meta content="Caligatio/jsSHA" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="5134724" name="octolytics-dimension-repository_network_root_id" /><meta content="Caligatio/jsSHA" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/Caligatio/jsSHA/commits/master.atom" rel="alternate" title="Recent Commits to jsSHA:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/Caligatio/jsSHA/blob/master/src/sha1.js" data-pjax-transient>
  </head>


  <body class="logged-out  env-production windows vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



          <header class="site-header js-details-container Details alt-body-font" role="banner">
  <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav site-header-nav-main">
        <a href="/personal" class="js-selected-navigation-item nav-item nav-item-personal" data-ga-click="Header, click, Nav menu - item:personal" data-selected-links="/personal /personal">
          Personal
</a>        <a href="/open-source" class="js-selected-navigation-item nav-item nav-item-opensource" data-ga-click="Header, click, Nav menu - item:opensource" data-selected-links="/open-source /open-source">
          Open source
</a>        <a href="/business" class="js-selected-navigation-item nav-item nav-item-business" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/partners /business/features /business/customers /business">
          Business
</a>        <a href="/explore" class="js-selected-navigation-item nav-item nav-item-explore" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /showcases /explore">
          Explore
</a>      </nav>

      <div class="site-header-actions">
            <a class="btn btn-primary site-header-actions-btn" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
          <a class="btn site-header-actions-btn mr-1" href="/login?return_to=%2FCaligatio%2FjsSHA%2Fblob%2Fmaster%2Fsrc%2Fsha1.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
      </div>

        <nav class="site-header-nav site-header-nav-secondary mr-md-3">
          <a class="nav-item" href="/pricing">Pricing</a>
          <a class="nav-item" href="/blog">Blog</a>
          <a class="nav-item" href="https://help.github.com">Support</a>
          <a class="nav-item header-search-link" href="https://github.com/search">Search GitHub</a>
              <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Caligatio/jsSHA/search" class="js-site-search-form" data-scoped-search-url="/Caligatio/jsSHA/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>

        </nav>
    </div>
  </div>
</header>



    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2FCaligatio%2FjsSHA"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/Caligatio/jsSHA/watchers"
     aria-label="66 users are watching this repository">
    66
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2FCaligatio%2FjsSHA"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/Caligatio/jsSHA/stargazers"
      aria-label="1113 users starred this repository">
      1,113
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2FCaligatio%2FjsSHA"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/Caligatio/jsSHA/network" class="social-count"
       aria-label="206 users forked this repository">
      206
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/Caligatio" class="url fn" rel="author">Caligatio</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/Caligatio/jsSHA" data-pjax="#js-repo-pjax-container">jsSHA</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/Caligatio/jsSHA" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /Caligatio/jsSHA" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/Caligatio/jsSHA/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /Caligatio/jsSHA/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">1</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/Caligatio/jsSHA/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /Caligatio/jsSHA/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/Caligatio/jsSHA/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /Caligatio/jsSHA/projects">
    <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span class="counter">0</span>
</a>


  <a href="/Caligatio/jsSHA/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /Caligatio/jsSHA/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/Caligatio/jsSHA/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /Caligatio/jsSHA/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/Caligatio/jsSHA/blob/9aabb6e5cc72e938d8eb420c27c0b3bdff51c3da/src/sha1.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:d42788c92843e3ee40323ff5f303f677 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Caligatio/jsSHA/blob/gh-pages/src/sha1.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/Caligatio/jsSHA/blob/master/src/sha1.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Caligatio/jsSHA/blob/v1/src/sha1.js"
               data-name="v1"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v1
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Caligatio/jsSHA/tree/v2.2.0/src/sha1.js"
              data-name="v2.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.2.0">
                v2.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Caligatio/jsSHA/tree/v2.1.0/src/sha1.js"
              data-name="v2.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.1.0">
                v2.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Caligatio/jsSHA/tree/v2.0.2/src/sha1.js"
              data-name="v2.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.2">
                v2.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Caligatio/jsSHA/tree/v2.0.1/src/sha1.js"
              data-name="v2.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.1">
                v2.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Caligatio/jsSHA/tree/v2.0.0/src/sha1.js"
              data-name="v2.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.0">
                v2.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Caligatio/jsSHA/tree/v1.6.2/src/sha1.js"
              data-name="v1.6.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.2">
                v1.6.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Caligatio/jsSHA/tree/v1.6.1/src/sha1.js"
              data-name="v1.6.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.1">
                v1.6.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Caligatio/jsSHA/tree/v1.6.0/src/sha1.js"
              data-name="v1.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.0">
                v1.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Caligatio/jsSHA/tree/v1.5.0/src/sha1.js"
              data-name="v1.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0">
                v1.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Caligatio/jsSHA/tree/release-1.42/src/sha1.js"
              data-name="release-1.42"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="release-1.42">
                release-1.42
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Caligatio/jsSHA/tree/release-1.41/src/sha1.js"
              data-name="release-1.41"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="release-1.41">
                release-1.41
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Caligatio/jsSHA/tree/release-1.31/src/sha1.js"
              data-name="release-1.31"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="release-1.31">
                release-1.31
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Caligatio/jsSHA/tree/release-1.4/src/sha1.js"
              data-name="release-1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="release-1.4">
                release-1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Caligatio/jsSHA/tree/release-1.3/src/sha1.js"
              data-name="release-1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="release-1.3">
                release-1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Caligatio/jsSHA/tree/release-1.2/src/sha1.js"
              data-name="release-1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="release-1.2">
                release-1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Caligatio/jsSHA/tree/release-1.1/src/sha1.js"
              data-name="release-1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="release-1.1">
                release-1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Caligatio/jsSHA/tree/release-1.0/src/sha1.js"
              data-name="release-1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="release-1.0">
                release-1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Caligatio/jsSHA/tree/release-0.1/src/sha1.js"
              data-name="release-0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="release-0.1">
                release-0.1
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/Caligatio/jsSHA/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/Caligatio/jsSHA"><span>jsSHA</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/Caligatio/jsSHA/tree/master/src"><span>src</span></a></span><span class="separator">/</span><strong class="final-path">sha1.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/Caligatio/jsSHA/commit/9aabb6e5cc72e938d8eb420c27c0b3bdff51c3da" data-pjax>
          9aabb6e
        </a>
        <relative-time datetime="2017-01-02T17:08:18Z">Jan 2, 2017</relative-time>
      </span>
      <div>
        <img alt="@Caligatio" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/2017685?v=3&amp;s=40" width="20" />
        <a href="/Caligatio" class="user-mention" rel="author">Caligatio</a>
          <a href="/Caligatio/jsSHA/commit/9aabb6e5cc72e938d8eb420c27c0b3bdff51c3da" class="message" data-pjax="true" title="Updated copyright year">Updated copyright year</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>2</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="Caligatio" href="/Caligatio/jsSHA/commits/master/src/sha1.js?author=Caligatio"><img alt="@Caligatio" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/2017685?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="drewcovi" href="/Caligatio/jsSHA/commits/master/src/sha1.js?author=drewcovi"><img alt="@drewcovi" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/400278?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@Caligatio" height="24" src="https://avatars1.githubusercontent.com/u/2017685?v=3&amp;s=48" width="24" />
            <a href="/Caligatio">Caligatio</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@drewcovi" height="24" src="https://avatars1.githubusercontent.com/u/400278?v=3&amp;s=48" width="24" />
            <a href="/drewcovi">drewcovi</a>
          </li>
      </ul>
    </div>
  </div>


<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/Caligatio/jsSHA/raw/master/src/sha1.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/Caligatio/jsSHA/blame/master/src/sha1.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/Caligatio/jsSHA/commits/master/src/sha1.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      26 lines (23 sloc)
      <span class="file-info-divider"></span>
    7.05 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span></span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> A JavaScript implementation of the SHA family of hashes, as</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> defined in FIPS PUB 180-4 and FIPS PUB 202, as well as the corresponding</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> HMAC implementation as defined in FIPS PUB 198a</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> Copyright Brian Turek 2008-2017</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> Distributed under the BSD License</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> See http://caligatio.github.com/jsSHA/ for more information</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> Several functions taken from Paul Johnston</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;(<span class="pl-k">function</span>(<span class="pl-c1">G</span>){<span class="pl-k">function</span> <span class="pl-en">r</span>(<span class="pl-smi">d</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){<span class="pl-k">var</span> h<span class="pl-k">=</span><span class="pl-c1">0</span>,a<span class="pl-k">=</span>[],g<span class="pl-k">=</span><span class="pl-c1">0</span>,f,m,k,e,l,p,q,t,w<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>,n<span class="pl-k">=</span>[],u<span class="pl-k">=</span>[],v,r<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>;c<span class="pl-k">=</span>c<span class="pl-k">||</span>{};f<span class="pl-k">=</span><span class="pl-smi">c</span>.<span class="pl-c1">encoding</span><span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span>UTF8<span class="pl-pds">&quot;</span></span>;v<span class="pl-k">=</span><span class="pl-smi">c</span>.<span class="pl-smi">numRounds</span><span class="pl-k">||</span><span class="pl-c1">1</span>;<span class="pl-k">if</span>(v<span class="pl-k">!==</span><span class="pl-c1">parseInt</span>(v,<span class="pl-c1">10</span>)<span class="pl-k">||</span><span class="pl-c1">1</span><span class="pl-k">&gt;</span>v)<span class="pl-k">throw</span> <span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>numRounds must a integer &gt;= 1<span class="pl-pds">&quot;</span></span>);<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>SHA-1<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>d)l<span class="pl-k">=</span><span class="pl-c1">512</span>,p<span class="pl-k">=</span>z,q<span class="pl-k">=</span><span class="pl-c1">H</span>,e<span class="pl-k">=</span><span class="pl-c1">160</span>,<span class="pl-en">t</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-c1">slice</span>()};<span class="pl-k">else</span> <span class="pl-k">throw</span> <span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Chosen SHA variant is not supported<span class="pl-pds">&quot;</span></span>);k<span class="pl-k">=</span><span class="pl-en">A</span>(b,f);m<span class="pl-k">=</span><span class="pl-en">x</span>(d);<span class="pl-c1">this</span>.<span class="pl-en">setHMACKey</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">g</span>){<span class="pl-k">var</span> c;<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">0</span><span class="pl-k">===</span>w)<span class="pl-k">throw</span> <span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>HMAC key already set<span class="pl-pds">&quot;</span></span>);<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">0</span><span class="pl-k">===</span>r)<span class="pl-k">throw</span> <span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Cannot set HMAC key after calling update<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">f<span class="pl-k">=</span>(g<span class="pl-k">||</span>{}).<span class="pl-c1">encoding</span><span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span>UTF8<span class="pl-pds">&quot;</span></span>;b<span class="pl-k">=</span><span class="pl-en">A</span>(b,f)(a);a<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-smi">binLen</span>;b<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">value</span>;c<span class="pl-k">=</span>l<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">3</span>;g<span class="pl-k">=</span>c<span class="pl-k">/</span><span class="pl-c1">4</span><span class="pl-k">-</span><span class="pl-c1">1</span>;<span class="pl-k">if</span>(c<span class="pl-k">&lt;</span>a<span class="pl-k">/</span><span class="pl-c1">8</span>){<span class="pl-k">for</span>(b<span class="pl-k">=</span><span class="pl-en">q</span>(b,a,<span class="pl-c1">0</span>,<span class="pl-en">x</span>(d),e);<span class="pl-smi">b</span>.<span class="pl-c1">length</span><span class="pl-k">&lt;=</span>g;)<span class="pl-smi">b</span>.<span class="pl-c1">push</span>(<span class="pl-c1">0</span>);b[g]<span class="pl-k">&amp;=</span><span class="pl-c1">4294967040</span>}<span class="pl-k">else</span> <span class="pl-k">if</span>(c<span class="pl-k">&gt;</span>a<span class="pl-k">/</span><span class="pl-c1">8</span>){<span class="pl-k">for</span>(;<span class="pl-smi">b</span>.<span class="pl-c1">length</span><span class="pl-k">&lt;=</span>g;)<span class="pl-smi">b</span>.<span class="pl-c1">push</span>(<span class="pl-c1">0</span>);b[g]<span class="pl-k">&amp;=</span><span class="pl-c1">4294967040</span>}<span class="pl-k">for</span>(a<span class="pl-k">=</span><span class="pl-c1">0</span>;a<span class="pl-k">&lt;=</span>g;a<span class="pl-k">+=</span><span class="pl-c1">1</span>)n[a]<span class="pl-k">=</span>b[a]<span class="pl-k">^</span><span class="pl-c1">909522486</span>,u[a]<span class="pl-k">=</span>b[a]<span class="pl-k">^</span><span class="pl-c1">1549556828</span>;m<span class="pl-k">=</span><span class="pl-en">p</span>(n,m);h<span class="pl-k">=</span>l;w<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>};<span class="pl-c1">this</span>.<span class="pl-en">update</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">var</span> e,f,c,d<span class="pl-k">=</span><span class="pl-c1">0</span>,q<span class="pl-k">=</span>l<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">5</span>;e<span class="pl-k">=</span><span class="pl-en">k</span>(b,a,g);b<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-smi">binLen</span>;f<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-c1">value</span>;e<span class="pl-k">=</span>b<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">5</span>;<span class="pl-k">for</span>(c<span class="pl-k">=</span><span class="pl-c1">0</span>;c<span class="pl-k">&lt;</span>e;c<span class="pl-k">+=</span>q)d<span class="pl-k">+</span>l<span class="pl-k">&lt;=</span>b<span class="pl-k">&amp;&amp;</span>(m<span class="pl-k">=</span><span class="pl-en">p</span>(<span class="pl-smi">f</span>.<span class="pl-c1">slice</span>(c,c<span class="pl-k">+</span>q),m),d<span class="pl-k">+=</span>l);h<span class="pl-k">+=</span>d;a<span class="pl-k">=</span><span class="pl-smi">f</span>.<span class="pl-c1">slice</span>(d<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">5</span>);g<span class="pl-k">=</span>b<span class="pl-k">%</span>l;r<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>};<span class="pl-c1">this</span>.<span class="pl-en">getHash</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>,<span class="pl-smi">f</span>){<span class="pl-k">var</span> c,k,l,p;<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">0</span><span class="pl-k">===</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">w)<span class="pl-k">throw</span> <span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Cannot call getHash after setting HMAC key<span class="pl-pds">&quot;</span></span>);l<span class="pl-k">=</span><span class="pl-en">B</span>(f);<span class="pl-k">switch</span>(b){<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>HEX<span class="pl-pds">&quot;</span></span>:<span class="pl-en">c</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> <span class="pl-en">C</span>(a,e,l)};<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>B64<span class="pl-pds">&quot;</span></span>:<span class="pl-en">c</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> <span class="pl-en">D</span>(a,e,l)};<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>BYTES<span class="pl-pds">&quot;</span></span>:<span class="pl-en">c</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> <span class="pl-en">E</span>(a,e)};<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>ARRAYBUFFER<span class="pl-pds">&quot;</span></span>:<span class="pl-k">try</span>{k<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">ArrayBuffer</span>(<span class="pl-c1">0</span>)}<span class="pl-k">catch</span>(<span class="pl-c1">I</span>){<span class="pl-k">throw</span> <span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>ARRAYBUFFER not supported by this environment<span class="pl-pds">&quot;</span></span>);}c=function(a){return F(a,e)};break;default:throw Error(&quot;format must be HEX, B64, BYTES, or ARRAYBUFFER&quot;);}p=q(a.slice(),g,h,t(m),e);for(k=1;k&lt;v;k+=1)p=q(p,e,0,x(d),e);</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-en">c</span>(p)};<span class="pl-c1">this</span>.<span class="pl-en">getHMAC</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>,<span class="pl-smi">f</span>){<span class="pl-k">var</span> c,k,n,r;<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">1</span><span class="pl-k">===</span>w)<span class="pl-k">throw</span> <span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Cannot call getHMAC without first setting HMAC key<span class="pl-pds">&quot;</span></span>);n<span class="pl-k">=</span><span class="pl-en">B</span>(f);<span class="pl-k">switch</span>(b){<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>HEX<span class="pl-pds">&quot;</span></span>:<span class="pl-en">c</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> <span class="pl-en">C</span>(a,e,n)};<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>B64<span class="pl-pds">&quot;</span></span>:<span class="pl-en">c</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> <span class="pl-en">D</span>(a,e,n)};<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>BYTES<span class="pl-pds">&quot;</span></span>:<span class="pl-en">c</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> <span class="pl-en">E</span>(a,e)};<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>ARRAYBUFFER<span class="pl-pds">&quot;</span></span>:<span class="pl-k">try</span>{c<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">ArrayBuffer</span>(<span class="pl-c1">0</span>)}<span class="pl-k">catch</span>(<span class="pl-c1">I</span>){<span class="pl-k">throw</span> <span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>ARRAYBUFFER not supported by this environment<span class="pl-pds">&quot;</span></span>);}c=function(a){return F(a,e)};break;default:throw Error(&quot;outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER&quot;);</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">}k<span class="pl-k">=</span><span class="pl-en">q</span>(<span class="pl-smi">a</span>.<span class="pl-c1">slice</span>(),g,h,<span class="pl-en">t</span>(m),e);r<span class="pl-k">=</span><span class="pl-en">p</span>(u,<span class="pl-en">x</span>(d));r<span class="pl-k">=</span><span class="pl-en">q</span>(k,e,l,r,e);<span class="pl-k">return</span> <span class="pl-en">c</span>(r)}}function C(d,b,c){var h=&quot;&quot;;b/=8;var a,g;for(a=0;a&lt;b;a+=1)g=d[a&gt;&gt;&gt;2]&gt;&gt;&gt;8*(3+a%4*-1),h+=&quot;0123456789abcdef&quot;.charAt(g&gt;&gt;&gt;4&amp;15)+&quot;0123456789abcdef&quot;.charAt(g&amp;15);return c.outputUpper?h.toUpperCase():h}function D(d,b,c){var h=&quot;&quot;,a=b/8,g,f,m;for(g=0;g&lt;a;g+=3)for(f=g+1&lt;a?d[g+1&gt;&gt;&gt;2]:0,m=g+2&lt;a?d[g+2&gt;&gt;&gt;2]:0,m=(d[g&gt;&gt;&gt;2]&gt;&gt;&gt;8*(3+g%4*-1)&amp;255)&lt;&lt;16|(f&gt;&gt;&gt;8*(3+(g+1)%4*-1)&amp;255)&lt;&lt;8|m&gt;&gt;&gt;8*(3+(g+2)%4*-1)&amp;255,f=0;4&gt;f;f+=1)8*g+6*f&lt;=b?h+=&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/&quot;.charAt(m&gt;&gt;&gt;</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">6</span><span class="pl-k">*</span>(<span class="pl-c1">3</span><span class="pl-k">-</span>f)<span class="pl-k">&amp;</span><span class="pl-c1">63</span>)<span class="pl-k">:</span>h<span class="pl-k">+=</span><span class="pl-smi">c</span>.<span class="pl-smi">b64Pad</span>;<span class="pl-k">return</span> h}function E(d,b){var c=&quot;&quot;,h=b/8,a,g;for(a=0;a&lt;h;a+=1)g=d[a&gt;&gt;&gt;2]&gt;&gt;&gt;8*(3+a%4*-1)&amp;255,c+=String.fromCharCode(g);return c}function F(d,b){var c=b/8,h,a=new ArrayBuffer(c);for(h=0;h&lt;c;h+=1)a[h]=d[h&gt;&gt;&gt;2]&gt;&gt;&gt;8*(3+h%4*-1)&amp;255;return a}function B(d){var b={outputUpper:!1,b64Pad:&quot;=&quot;,shakeLen:-1};d=d||{};b.outputUpper=d.outputUpper||!1;!0===d.hasOwnProperty(&quot;b64Pad&quot;)&amp;&amp;(b.b64Pad=d.b64Pad);if(&quot;boolean&quot;!==typeof b.outputUpper)throw Error(&quot;Invalid outputUpper formatting option&quot;);if(&quot;string&quot;!==</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-k">typeof</span> <span class="pl-smi">b</span>.<span class="pl-smi">b64Pad</span>)<span class="pl-k">throw</span> <span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid b64Pad formatting option<span class="pl-pds">&quot;</span></span>);<span class="pl-k">return</span> b}function A(d,b){var c;switch(b){case &quot;UTF8&quot;:case &quot;UTF16BE&quot;:case &quot;UTF16LE&quot;:break;default:throw Error(&quot;encoding must be UTF8, UTF16BE, or UTF16LE&quot;);}switch(d){case &quot;HEX&quot;:c=function(b,a,g){var f=b.length,c,d,e,l,p;if(0!==f%2)throw Error(&quot;String of HEX type must be in byte increments&quot;);a=a||[0];g=g||0;p=g&gt;&gt;&gt;3;for(c=0;c&lt;f;c+=2){d=parseInt(b.substr(c,2),16);if(isNaN(d))throw Error(&quot;String of HEX type contains invalid characters&quot;);</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">l<span class="pl-k">=</span>(c<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">1</span>)<span class="pl-k">+</span>p;<span class="pl-k">for</span>(e<span class="pl-k">=</span>l<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">2</span>;<span class="pl-smi">a</span>.<span class="pl-c1">length</span><span class="pl-k">&lt;=</span>e;)<span class="pl-smi">a</span>.<span class="pl-c1">push</span>(<span class="pl-c1">0</span>);a[e]<span class="pl-k">|=</span>d<span class="pl-k">&lt;&lt;</span><span class="pl-c1">8</span><span class="pl-k">*</span>(<span class="pl-c1">3</span><span class="pl-k">+</span>l<span class="pl-k">%</span><span class="pl-c1">4</span><span class="pl-k">*-</span><span class="pl-c1">1</span>)}<span class="pl-k">return</span>{value<span class="pl-k">:</span>a,binLen<span class="pl-k">:</span><span class="pl-c1">4</span><span class="pl-k">*</span>f<span class="pl-k">+</span>g}};<span class="pl-k">break</span>;case <span class="pl-s"><span class="pl-pds">&quot;</span>TEXT<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-en">c</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">c</span>,<span class="pl-smi">a</span>,<span class="pl-smi">g</span>){<span class="pl-k">var</span> f,d,k<span class="pl-k">=</span><span class="pl-c1">0</span>,e,l,p,q,t,n;a<span class="pl-k">=</span>a<span class="pl-k">||</span>[<span class="pl-c1">0</span>];g<span class="pl-k">=</span>g<span class="pl-k">||</span><span class="pl-c1">0</span>;p<span class="pl-k">=</span>g<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">3</span>;<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>UTF8<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>b)<span class="pl-k">for</span>(n<span class="pl-k">=</span><span class="pl-c1">3</span>,e<span class="pl-k">=</span><span class="pl-c1">0</span>;e<span class="pl-k">&lt;</span><span class="pl-smi">c</span>.<span class="pl-c1">length</span>;e<span class="pl-k">+=</span><span class="pl-c1">1</span>)<span class="pl-k">for</span>(f<span class="pl-k">=</span><span class="pl-smi">c</span>.<span class="pl-c1">charCodeAt</span>(e),d<span class="pl-k">=</span>[],<span class="pl-c1">128</span><span class="pl-k">&gt;</span>f<span class="pl-k">?</span><span class="pl-smi">d</span>.<span class="pl-c1">push</span>(f)<span class="pl-k">:</span><span class="pl-c1">2048</span><span class="pl-k">&gt;</span>f<span class="pl-k">?</span>(<span class="pl-smi">d</span>.<span class="pl-c1">push</span>(<span class="pl-c1">192</span><span class="pl-k">|</span>f<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">6</span>),<span class="pl-smi">d</span>.<span class="pl-c1">push</span>(<span class="pl-c1">128</span><span class="pl-k">|</span>f<span class="pl-k">&amp;</span><span class="pl-c1">63</span>))<span class="pl-k">:</span><span class="pl-c1">55296</span><span class="pl-k">&gt;</span>f<span class="pl-k">||</span><span class="pl-c1">57344</span><span class="pl-k">&lt;=</span>f<span class="pl-k">?</span><span class="pl-smi">d</span>.<span class="pl-c1">push</span>(<span class="pl-c1">224</span><span class="pl-k">|</span>f<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">12</span>,<span class="pl-c1">128</span><span class="pl-k">|</span>f<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">6</span><span class="pl-k">&amp;</span><span class="pl-c1">63</span>,<span class="pl-c1">128</span><span class="pl-k">|</span>f<span class="pl-k">&amp;</span><span class="pl-c1">63</span>)<span class="pl-k">:</span>(e<span class="pl-k">+=</span><span class="pl-c1">1</span>,f<span class="pl-k">=</span><span class="pl-c1">65536</span><span class="pl-k">+</span>((f<span class="pl-k">&amp;</span><span class="pl-c1">1023</span>)<span class="pl-k">&lt;&lt;</span><span class="pl-c1">10</span><span class="pl-k">|</span><span class="pl-smi">c</span>.<span class="pl-c1">charCodeAt</span>(e)<span class="pl-k">&amp;</span><span class="pl-c1">1023</span>),<span class="pl-smi">d</span>.<span class="pl-c1">push</span>(<span class="pl-c1">240</span><span class="pl-k">|</span>f<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">18</span>,<span class="pl-c1">128</span><span class="pl-k">|</span>f<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">12</span><span class="pl-k">&amp;</span><span class="pl-c1">63</span>,<span class="pl-c1">128</span><span class="pl-k">|</span>f<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">6</span><span class="pl-k">&amp;</span><span class="pl-c1">63</span>,<span class="pl-c1">128</span><span class="pl-k">|</span>f<span class="pl-k">&amp;</span><span class="pl-c1">63</span>)),l<span class="pl-k">=</span><span class="pl-c1">0</span>;l<span class="pl-k">&lt;</span><span class="pl-smi">d</span>.<span class="pl-c1">length</span>;l<span class="pl-k">+=</span><span class="pl-c1">1</span>){t<span class="pl-k">=</span>k<span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">p;<span class="pl-k">for</span>(q<span class="pl-k">=</span>t<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">2</span>;<span class="pl-smi">a</span>.<span class="pl-c1">length</span><span class="pl-k">&lt;=</span>q;)<span class="pl-smi">a</span>.<span class="pl-c1">push</span>(<span class="pl-c1">0</span>);a[q]<span class="pl-k">|=</span>d[l]<span class="pl-k">&lt;&lt;</span><span class="pl-c1">8</span><span class="pl-k">*</span>(n<span class="pl-k">+</span>t<span class="pl-k">%</span><span class="pl-c1">4</span><span class="pl-k">*-</span><span class="pl-c1">1</span>);k<span class="pl-k">+=</span><span class="pl-c1">1</span>}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>UTF16BE<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>b<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span>UTF16LE<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>b)<span class="pl-k">for</span>(n<span class="pl-k">=</span><span class="pl-c1">2</span>,e<span class="pl-k">=</span><span class="pl-c1">0</span>;e<span class="pl-k">&lt;</span><span class="pl-smi">c</span>.<span class="pl-c1">length</span>;e<span class="pl-k">+=</span><span class="pl-c1">1</span>){f<span class="pl-k">=</span><span class="pl-smi">c</span>.<span class="pl-c1">charCodeAt</span>(e);<span class="pl-s"><span class="pl-pds">&quot;</span>UTF16LE<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>b<span class="pl-k">&amp;&amp;</span>(l<span class="pl-k">=</span>f<span class="pl-k">&amp;</span><span class="pl-c1">255</span>,f<span class="pl-k">=</span>l<span class="pl-k">&lt;&lt;</span><span class="pl-c1">8</span><span class="pl-k">|</span>f<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">8</span>);t<span class="pl-k">=</span>k<span class="pl-k">+</span>p;<span class="pl-k">for</span>(q<span class="pl-k">=</span>t<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">2</span>;<span class="pl-smi">a</span>.<span class="pl-c1">length</span><span class="pl-k">&lt;=</span>q;)<span class="pl-smi">a</span>.<span class="pl-c1">push</span>(<span class="pl-c1">0</span>);a[q]<span class="pl-k">|=</span>f<span class="pl-k">&lt;&lt;</span><span class="pl-c1">8</span><span class="pl-k">*</span>(n<span class="pl-k">+</span>t<span class="pl-k">%</span><span class="pl-c1">4</span><span class="pl-k">*-</span><span class="pl-c1">1</span>);k<span class="pl-k">+=</span><span class="pl-c1">2</span>}<span class="pl-k">return</span>{value<span class="pl-k">:</span>a,binLen<span class="pl-k">:</span><span class="pl-c1">8</span><span class="pl-k">*</span>k<span class="pl-k">+</span>g}};<span class="pl-k">break</span>;case <span class="pl-s"><span class="pl-pds">&quot;</span>B64<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-en">c</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>,<span class="pl-smi">a</span>,<span class="pl-smi">c</span>){<span class="pl-k">var</span> f<span class="pl-k">=</span><span class="pl-c1">0</span>,d,k,e,l,p,q,n;<span class="pl-k">if</span>(<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">===</span><span class="pl-smi">b</span>.<span class="pl-c1">search</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">a-zA-Z0-9</span>=+<span class="pl-cce">\/</span>]</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>))<span class="pl-k">throw</span> <span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid character in base-64 string<span class="pl-pds">&quot;</span></span>);k<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>=<span class="pl-pds">&quot;</span></span>);b<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\=</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);<span class="pl-k">if</span>(<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">!==</span>k<span class="pl-k">&amp;&amp;</span>k<span class="pl-k">&lt;</span><span class="pl-smi">b</span>.<span class="pl-c1">length</span>)<span class="pl-k">throw</span> <span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid &#39;=&#39; found in base-64 string<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">a<span class="pl-k">=</span>a<span class="pl-k">||</span>[<span class="pl-c1">0</span>];c<span class="pl-k">=</span>c<span class="pl-k">||</span><span class="pl-c1">0</span>;q<span class="pl-k">=</span>c<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">3</span>;<span class="pl-k">for</span>(k<span class="pl-k">=</span><span class="pl-c1">0</span>;k<span class="pl-k">&lt;</span><span class="pl-smi">b</span>.<span class="pl-c1">length</span>;k<span class="pl-k">+=</span><span class="pl-c1">4</span>){p<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">substr</span>(k,<span class="pl-c1">4</span>);<span class="pl-k">for</span>(e<span class="pl-k">=</span>l<span class="pl-k">=</span><span class="pl-c1">0</span>;e<span class="pl-k">&lt;</span><span class="pl-smi">p</span>.<span class="pl-c1">length</span>;e<span class="pl-k">+=</span><span class="pl-c1">1</span>)d<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/<span class="pl-pds">&quot;</span></span>.<span class="pl-c1">indexOf</span>(p[e]),l<span class="pl-k">|=</span>d<span class="pl-k">&lt;&lt;</span><span class="pl-c1">18</span><span class="pl-k">-</span><span class="pl-c1">6</span><span class="pl-k">*</span>e;<span class="pl-k">for</span>(e<span class="pl-k">=</span><span class="pl-c1">0</span>;e<span class="pl-k">&lt;</span><span class="pl-smi">p</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>;e<span class="pl-k">+=</span><span class="pl-c1">1</span>){n<span class="pl-k">=</span>f<span class="pl-k">+</span>q;<span class="pl-k">for</span>(d<span class="pl-k">=</span>n<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">2</span>;<span class="pl-smi">a</span>.<span class="pl-c1">length</span><span class="pl-k">&lt;=</span>d;)<span class="pl-smi">a</span>.<span class="pl-c1">push</span>(<span class="pl-c1">0</span>);a[d]<span class="pl-k">|=</span>(l<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">16</span><span class="pl-k">-</span><span class="pl-c1">8</span><span class="pl-k">*</span>e<span class="pl-k">&amp;</span><span class="pl-c1">255</span>)<span class="pl-k">&lt;&lt;</span><span class="pl-c1">8</span><span class="pl-k">*</span>(<span class="pl-c1">3</span><span class="pl-k">+</span>n<span class="pl-k">%</span><span class="pl-c1">4</span><span class="pl-k">*-</span><span class="pl-c1">1</span>);f<span class="pl-k">+=</span><span class="pl-c1">1</span>}}<span class="pl-k">return</span>{value<span class="pl-k">:</span>a,binLen<span class="pl-k">:</span><span class="pl-c1">8</span><span class="pl-k">*</span>f<span class="pl-k">+</span>c}};<span class="pl-k">break</span>;case <span class="pl-s"><span class="pl-pds">&quot;</span>BYTES<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-en">c</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>,<span class="pl-smi">a</span>,<span class="pl-smi">c</span>){<span class="pl-k">var</span> f,d,k,e,l;a<span class="pl-k">=</span>a<span class="pl-k">||</span>[<span class="pl-c1">0</span>];c<span class="pl-k">=</span>c<span class="pl-k">||</span><span class="pl-c1">0</span>;k<span class="pl-k">=</span>c<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">3</span>;<span class="pl-k">for</span>(d<span class="pl-k">=</span><span class="pl-c1">0</span>;d<span class="pl-k">&lt;</span><span class="pl-smi">b</span>.<span class="pl-c1">length</span>;d<span class="pl-k">+=</span><span class="pl-c1">1</span>)f<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">charCodeAt</span>(d),l<span class="pl-k">=</span>d<span class="pl-k">+</span>k,e<span class="pl-k">=</span>l<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">2</span>,<span class="pl-smi">a</span>.<span class="pl-c1">length</span><span class="pl-k">&lt;=</span>e<span class="pl-k">&amp;&amp;</span><span class="pl-smi">a</span>.<span class="pl-c1">push</span>(<span class="pl-c1">0</span>),a[e]<span class="pl-k">|=</span>f<span class="pl-k">&lt;&lt;</span><span class="pl-c1">8</span><span class="pl-k">*</span>(<span class="pl-c1">3</span><span class="pl-k">+</span>l<span class="pl-k">%</span><span class="pl-c1">4</span><span class="pl-k">*-</span><span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span>{value<span class="pl-k">:</span>a,binLen<span class="pl-k">:</span><span class="pl-c1">8</span><span class="pl-k">*</span><span class="pl-smi">b</span>.<span class="pl-c1">length</span><span class="pl-k">+</span>c}};<span class="pl-k">break</span>;case <span class="pl-s"><span class="pl-pds">&quot;</span>ARRAYBUFFER<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-k">try</span>{c<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">ArrayBuffer</span>(<span class="pl-c1">0</span>)}<span class="pl-k">catch</span>(h){<span class="pl-k">throw</span> <span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>ARRAYBUFFER not supported by this environment<span class="pl-pds">&quot;</span></span>);}c=function(b,a,c){var d,m,k,e;a=a||[0];c=c||0;m=c&gt;&gt;&gt;3;for(d=0;d&lt;b.byteLength;d+=1)e=d+m,k=e&gt;&gt;&gt;2,a.length&lt;=k&amp;&amp;a.push(0),a[k]|=b[d]&lt;&lt;8*(3+e%4*-1);return{value:a,binLen:8*b.byteLength+c}};break;default:throw Error(&quot;format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER&quot;);}return c}function n(d,b){return d&lt;&lt;b|d&gt;&gt;&gt;32-b}function u(d,b){var c=(d&amp;65535)+</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">(b<span class="pl-k">&amp;</span><span class="pl-c1">65535</span>);<span class="pl-k">return</span>((d<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">16</span>)<span class="pl-k">+</span>(b<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">16</span>)<span class="pl-k">+</span>(c<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">16</span>)<span class="pl-k">&amp;</span><span class="pl-c1">65535</span>)<span class="pl-k">&lt;&lt;</span><span class="pl-c1">16</span><span class="pl-k">|</span>c<span class="pl-k">&amp;</span><span class="pl-c1">65535</span>}function y(d,b,c,h,a){var g=(d&amp;65535)+(b&amp;65535)+(c&amp;65535)+(h&amp;65535)+(a&amp;65535);return((d&gt;&gt;&gt;16)+(b&gt;&gt;&gt;16)+(c&gt;&gt;&gt;16)+(h&gt;&gt;&gt;16)+(a&gt;&gt;&gt;16)+(g&gt;&gt;&gt;16)&amp;65535)&lt;&lt;16|g&amp;65535}function x(d){var b=[];if(&quot;SHA-1&quot;===d)b=[1732584193,4023233417,2562383102,271733878,3285377520];else throw Error(&quot;No SHA variants supported&quot;);return b}function z(d,b){var c=[],h,a,g,f,m,k,e;h=b[0];a=b[1];g=b[2];f=b[3];m=b[4];for(e=0;80&gt;e;e+=1)c[e]=16&gt;e?d[e]:n(c[e-3]^c[e-8]^c[e-14]^</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">c[e<span class="pl-k">-</span><span class="pl-c1">16</span>],<span class="pl-c1">1</span>),k<span class="pl-k">=</span><span class="pl-c1">20</span><span class="pl-k">&gt;</span>e<span class="pl-k">?</span><span class="pl-en">y</span>(<span class="pl-en">n</span>(h,<span class="pl-c1">5</span>),a<span class="pl-k">&amp;</span>g<span class="pl-k">^~</span>a<span class="pl-k">&amp;</span>f,m,<span class="pl-c1">1518500249</span>,c[e])<span class="pl-k">:</span><span class="pl-c1">40</span><span class="pl-k">&gt;</span>e<span class="pl-k">?</span><span class="pl-en">y</span>(<span class="pl-en">n</span>(h,<span class="pl-c1">5</span>),a<span class="pl-k">^</span>g<span class="pl-k">^</span>f,m,<span class="pl-c1">1859775393</span>,c[e])<span class="pl-k">:</span><span class="pl-c1">60</span><span class="pl-k">&gt;</span>e<span class="pl-k">?</span><span class="pl-en">y</span>(<span class="pl-en">n</span>(h,<span class="pl-c1">5</span>),a<span class="pl-k">&amp;</span>g<span class="pl-k">^</span>a<span class="pl-k">&amp;</span>f<span class="pl-k">^</span>g<span class="pl-k">&amp;</span>f,m,<span class="pl-c1">2400959708</span>,c[e])<span class="pl-k">:</span><span class="pl-en">y</span>(<span class="pl-en">n</span>(h,<span class="pl-c1">5</span>),a<span class="pl-k">^</span>g<span class="pl-k">^</span>f,m,<span class="pl-c1">3395469782</span>,c[e]),m<span class="pl-k">=</span>f,f<span class="pl-k">=</span>g,g<span class="pl-k">=</span><span class="pl-en">n</span>(a,<span class="pl-c1">30</span>),a<span class="pl-k">=</span>h,h<span class="pl-k">=</span>k;b[<span class="pl-c1">0</span>]<span class="pl-k">=</span><span class="pl-en">u</span>(h,b[<span class="pl-c1">0</span>]);b[<span class="pl-c1">1</span>]<span class="pl-k">=</span><span class="pl-en">u</span>(a,b[<span class="pl-c1">1</span>]);b[<span class="pl-c1">2</span>]<span class="pl-k">=</span><span class="pl-en">u</span>(g,b[<span class="pl-c1">2</span>]);b[<span class="pl-c1">3</span>]<span class="pl-k">=</span><span class="pl-en">u</span>(f,b[<span class="pl-c1">3</span>]);b[<span class="pl-c1">4</span>]<span class="pl-k">=</span><span class="pl-en">u</span>(m,b[<span class="pl-c1">4</span>]);<span class="pl-k">return</span> b}function H(d,b,c,h){var a;for(a=(b+65&gt;&gt;&gt;9&lt;&lt;4)+15;d.length&lt;=a;)d.push(0);d[b&gt;&gt;&gt;5]|=128&lt;&lt;24-b%32;b+=c;d[a]=b&amp;4294967295;d[a-1]=b/4294967296|0;b=d.length;for(a=0;a&lt;b;a+=16)h=z(d.slice(a,a+16),h);return h}&quot;function&quot;===typeof define&amp;&amp;</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">define</span>.<span class="pl-smi">amd</span><span class="pl-k">?</span><span class="pl-en">define</span>(<span class="pl-k">function</span>(){<span class="pl-k">return</span> r})<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span><span class="pl-k">typeof</span> <span class="pl-c1">exports</span><span class="pl-k">?</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span><span class="pl-k">typeof</span> <span class="pl-c1">module</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">module</span>.<span class="pl-smi">exports</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-c1">module</span>.<span class="pl-smi">exports</span><span class="pl-k">=</span>r),<span class="pl-c1">exports</span><span class="pl-k">=</span>r)<span class="pl-k">:</span><span class="pl-c1">G</span>.<span class="pl-smi">jsSHA</span><span class="pl-k">=</span>r})(<span class="pl-c1">this</span>);</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.05104s from github-fe-f06f8d5.cp1-iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
      </button>
      You can't perform that action at this time.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-DuHm14fdrEMV8PukK66JGmbWhATwRMQvVGacjAUfAWk=" src="https://assets-cdn.github.com/assets/frameworks-0ee1e6d787ddac4315f0fba42bae891a66d68404f044c42f54669c8c051f0169.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-ivhEPleCsZ6xaFqFhFmeoPOJ01eAYLQRx8fIRGkRBcM=" src="https://assets-cdn.github.com/assets/github-8af8443e5782b19eb1685a8584599ea0f389d3578060b411c7c7c844691105c3.js"></script>
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>

  </body>
</html>

