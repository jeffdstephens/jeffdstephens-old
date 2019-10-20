---
title: 'Contact me'
layout: page
path: '/contact'
---

This page is under construction. Check back later please!

<form 
    name="contact"
    method="post" 
    data-netlify="true" 
    data-netlify-honeypot="bot-field"
    action="/success/"
>
    <input type="hidden" name="bot-field" />
    <div>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" required></textarea>
    </div>
    <div>
        <button type="submit">Send</button>
        <button type="reset">Clear</button>
    </div>
</form>
