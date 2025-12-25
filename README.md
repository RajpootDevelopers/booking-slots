# Booking Slots API

A NestJS API that generates available booking slots based on date, time range, slot duration, buffer time, timezone, and already-booked slots.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server 
npm run start:dev

# The API will be available at http://localhost:3000
```

## 📡 API Endpoint

### Generate Available Slots

**POST** `/booking/slots`

Generates available time slots for a given date, filtering out already-booked slots.

#### Request Body

```json
{
  "date": "2025-12-26",
  "startTime": "09:00",
  "endTime": "17:00",
  "slotDuration": 30,
  "bufferTime": 10,
  "timezone": "Asia/Karachi",
  "bookedSlots": [
    { "start": "10:00", "end": "10:30" },
    { "start": "14:00", "end": "14:30" }
  ]
}
```

| Field | Type | Description |
|-------|------|-------------|
| `date` | string | Date in YYYY-MM-DD format |
| `startTime` | string | Day start time in HH:mm format |
| `endTime` | string | Day end time in HH:mm format |
| `slotDuration` | number | Slot duration in minutes |
| `bufferTime` | number | Buffer between slots in minutes |
| `timezone` | string | IANA timezone (e.g., "Asia/Karachi") |
| `bookedSlots` | array | Already-booked time ranges (optional) |

#### Response

```json
[
  { "start": "09:00", "end": "09:30" },
  { "start": "09:40", "end": "10:10" },
  { "start": "10:40", "end": "11:10" },
  ...
]
```

#### Example using cURL

```bash
curl -X POST http://localhost:3000/booking/slots \
  -H "Content-Type: application/json" \
  -d '{
    "date": "2025-12-26",
    "startTime": "09:00",
    "endTime": "12:00",
    "slotDuration": 30,
    "bufferTime": 10,
    "timezone": "Asia/Karachi",
    "bookedSlots": [{"start": "10:00", "end": "10:30"}]
  }'
```
