# Simple Node.js Microservice Application #

Application for booking tickets using Event-based Architecture and Optimistic Concurrency Controll (OCC)

## List of Event ##

### New Ticket ###
![Ảnh chụp Màn hình 2022-10-31 lúc 09 36 38](https://user-images.githubusercontent.com/36908718/198923119-539e9d5e-d807-4b4c-b853-e3f272f4df14.png)

### Update Ticket ###
![Ảnh chụp Màn hình 2022-10-31 lúc 09 37 21](https://user-images.githubusercontent.com/36908718/198923254-1f374f2f-7757-44b1-87a9-ed864acfbb7b.png)

### New Order ###
![Ảnh chụp Màn hình 2022-10-31 lúc 09 46 22](https://user-images.githubusercontent.com/36908718/198923263-4ff11b26-cd17-4fac-bf4d-d6bbdd13f78e.png)

### Cancell Order ###
![Ảnh chụp Màn hình 2022-10-31 lúc 09 41 40](https://user-images.githubusercontent.com/36908718/198923267-5dd33fb1-8f73-4f70-83bd-ab55b4ab5d22.png)

### Expired Order ###
![Ảnh chụp Màn hình 2022-10-31 lúc 09 43 03](https://user-images.githubusercontent.com/36908718/198923276-5ee51444-7552-4ede-b503-a0358148fde6.png)

### Paid Order ###
![Ảnh chụp Màn hình 2022-10-31 lúc 09 43 12](https://user-images.githubusercontent.com/36908718/198923283-897405fe-b3e2-4c5b-8ba3-30b59ef06013.png)

## Expiration Service ##
![Ảnh chụp Màn hình 2022-10-31 lúc 14 24 25](https://user-images.githubusercontent.com/36908718/198954672-c26a2e71-dc6d-48a4-941d-bc91793cfe47.png)


## Optimistic Concurrency Controll ##
If you have multiple instance of Order Service (A,B,C,D), it will lead to out-of-order-event error, each instance will handle different ticket:updated events simutaneously. For example, ticket service update price for one ticket by 10, and then update price for that ticket by 15. There is 2 event ticket:updated, one is update price by 10 (event-1) and other is update price by 15 (event-2). Instance A will handle event-1 and instance B will handle event-2. If instance B successfully update price of that ticket first, the price will be wrong.

![Ảnh chụp Màn hình 2022-10-31 lúc 09 51 54](https://user-images.githubusercontent.com/36908718/198923541-256a712e-3ab7-47f7-9913-e5d4719dd8c9.png)

We add version field for each ticket, when ticket:updated event is fired, version is increment by 1. Instances of Order service will check the version in DB, if version is not match, they will not process this event.

![Ảnh chụp Màn hình 2022-10-31 lúc 09 51 10](https://user-images.githubusercontent.com/36908718/198923552-975cda3f-ca31-4b4f-8f1d-0358c8d7987e.png)
