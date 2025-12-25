
const http = require('http');

const data = JSON.stringify({
    date: "2025-12-26",
    startTime: "09:00",
    endTime: "12:00",
    slotDuration: 30,
    bufferTime: 10,
    timezone: "Asia/Karachi",
    bookedSlots: []
});

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/booking/slots',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
    }
};

const req = http.request(options, (res) => {
    let responseData = '';

    res.on('data', (chunk) => {
        responseData += chunk;
    });

    res.on('end', () => {
        const slots = JSON.parse(responseData);
        console.log('Status:', res.statusCode);
        console.log('Total slots:', slots.length);
        console.log('Slots:', JSON.stringify(slots, null, 2));
    });
});

req.on('error', (e) => {
    console.error('Error:', e.message);
});

req.write(data);
req.end();
