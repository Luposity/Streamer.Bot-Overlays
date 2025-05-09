// Create New Streamer.Bot WebSocket Client
const client = new StreamerbotClient({
    port: 8080,
    immediate: true, 
    autoReconnect: true,
    subscribe: '*'
});

client.on('Twitch.AutomaticRewardRedemption', (data) => {
    if (!data.data.gigantified_emote) return; // Not Big Emote Redeem, do nothing
    var bigEmote = data.data.gigantified_emote.imageUrl; // Set Emote Variable to be Big Emote URL
    bigBootyEmote(bigEmote);
})

function bigBootyEmote(bigEmote) {

    const img = document.createElement('img'); // Create new Image Element

    img.src = `${bigEmote}`; // Set Image URL to URL of Big Emote
    img.classList.add('random-img'); // Set Style from CSS

    const maxX = window.innerWidth - 200; // Set Max X Value
    const maxY = window.innerHeight - 200; // Set Max Y Value

    const x = Math.random() * maxX; // Generate Random X Value where Emote Shows up
    const y = Math.random() * maxY; // Generate Random Y Value where Emote Shows up

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    document.body.appendChild(img); // Add Image to Overlay

    // Remove after 8 seconds
    setTimeout(() => {
        img.remove();
    }, 8000);
}