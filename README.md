# Simple Node.js Microservice Application #

Application for booking tickets using Event-based Architecture and Optimistic Concurrency Controll (OCC)

## List of Event ##
![Ảnh chụp Màn hình 2022-11-01 lúc 17 23 42](https://user-images.githubusercontent.com/36908718/199213783-a08fc707-615b-4ce5-9f29-1bb596f78757.png)

### New Ticket ###
![Ảnh chụp Màn hình 2022-11-01 lúc 17 23 58](https://user-images.githubusercontent.com/36908718/199213493-eb326e41-f69c-4cf1-88ce-3ddb08c28274.png)

### Update Ticket ###
![Ảnh chụp Màn hình 2022-11-01 lúc 17 24 05](https://user-images.githubusercontent.com/36908718/199213534-f24307f3-22d9-4e20-bce0-97ea8e48d010.png)

### New Order ###
![Ảnh chụp Màn hình 2022-11-01 lúc 17 24 13](https://user-images.githubusercontent.com/36908718/199213563-8b321e6c-77c6-45d2-8214-b68de6590833.png)

### Cancell Order ###
![Ảnh chụp Màn hình 2022-11-01 lúc 17 24 17](https://user-images.githubusercontent.com/36908718/199213623-2df94403-2df0-4eca-a2ea-055e8352539c.png)

### Expired Order ###
![Ảnh chụp Màn hình 2022-11-01 lúc 17 24 29](https://user-images.githubusercontent.com/36908718/199213661-ecefecc1-9e58-405a-ba79-af51db00d437.png)

### Paid Order ###
![Ảnh chụp Màn hình 2022-11-01 lúc 17 24 23](https://user-images.githubusercontent.com/36908718/199213694-b4a60131-4718-48dc-8204-a228acc159b1.png)

## Expiration Service ##
![Ảnh chụp Màn hình 2022-10-31 lúc 14 24 25](https://user-images.githubusercontent.com/36908718/198954672-c26a2e71-dc6d-48a4-941d-bc91793cfe47.png)


## Optimistic Concurrency Controll ##
If you have multiple instance of Order Service (A,B,C,D), it will lead to out-of-order-event error, each instance will handle different ticket:updated events simutaneously. For example, ticket service update price for one ticket by 10, and then update price for that ticket by 15. There is 2 event ticket:updated, one is update price by 10 (event-1) and other is update price by 15 (event-2). Instance A will handle event-1 and instance B will handle event-2. If instance B successfully update price of that ticket first, the price will be wrong.

![Ảnh chụp Màn hình 2022-10-31 lúc 09 51 54](https://user-images.githubusercontent.com/36908718/198923541-256a712e-3ab7-47f7-9913-e5d4719dd8c9.png)

We add version field for each ticket, when ticket:updated event is fired, version is increment by 1. Instances of Order service will check the version in DB, if version is not match, they will not process this event.

![Ảnh chụp Màn hình 2022-10-31 lúc 09 51 10](https://user-images.githubusercontent.com/36908718/198923552-975cda3f-ca31-4b4f-8f1d-0358c8d7987e.png)
