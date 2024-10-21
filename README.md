To set up: run with 'npm install'

Create an .env.local file

Create a variable as such NEXT_PUBLIC_LOCAL_IP = (Your IP Address)

Run with 'npm run dev'

"Why run with the IP address"?
I wanted to make sure that my socket was working when sending text messages.
Initially I figured I could just open a new tab and check if the new and old tab had the complete message history -- which it did.

But I wanted to go a bit further and check that if I sent a message from a different device, I could still see it on my laptop -- therefore giving it a much more 'real world' feel.
