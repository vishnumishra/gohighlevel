# backend

a [Sails v1](https://sailsjs.com) application


### Problem Statement:

Design and Implement a backend service for Wallet system supporting
• Setup wallet

• Credit / Debit transactions

• Fetching transactions on wallet

• Get wallet details

**Description:**

Create the following APIs for implementing a wallet system. **1. Initialise wallet**

1. Setup a new wallet with initial balance.

2. API endpoint → /setup

3.

| Request [POST] | Response |
| --- | --- |
| ``` {"initialAmount":10,"name":"vishnu mishra"} ``` | Status  201, Response body:``` {"createdAt": 1648414075011,"updatedAt": 1648414075011,"id": 55,"balance": 0,"name":"vishnu mishra","transactionId": 49} ```
| --- | --- |

**2. Credit/Debit amount**
1. This API should credit/debit the requested amount to the wallet.

2. API endpoint → /transact/:walletId

3.
| Request [POST] | Response |
| --- | --- |
|Param: walletId → id of wallet Body:{ amount: 10, description: &#39;Recharge&#39; } | Status: 201, Response body: { balance: 30, transactionId: &#39;1&#39; } |
4. For Credit the amount will be a positive number, for Debit it will be a negative number.

**3. Fetch transactions**

1. Given the wallet id, fetch the recent transactions on it.

2. API endpoint → /transactions?walletId={walletId}&amp;skip={skip} &amp;limit={limit}

3.

| Request [GET] | Response |
| --- | --- |
| Query: {walletId, skip, limit} E.g walletId=&#39;2434343&#39;&amp;skip=10&amp;limit =25 | Status: 200, Response body: [{ id, walletId: string, amount: number, balance: number, description: string, date: 1648397862376, type: &#39;CREDIT&#39;/&#39;DEBIT&#39; }, …...] |

4. The response for this API should be an array of transactions where each transaction object consists of mentioned properties.

1. id: Transaction id

2. walletId: Id of wallet

3. amount: Transaction amount

4. balance: Balance of wallet after transaction

5. date: Timestamp of transaction

**4. Get wallet**

1. Given wallet id, fetch the wallet details.

2. API endpoint → /wallet/:id

3.

| Request [GET] | Response |
| --- | --- |

| Params: id | Status: 200, Response body: { id, balance, name, date } |
| --- | --- |
