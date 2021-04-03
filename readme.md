# S4-Analytics Developer Test
Welcome to the developer test.

This repository has a skeleton UI5 application, where some new features are needed. The changes are both required in the frontend, but also changes to the CDS views on the Abap System.

Fork this repository and create a pull request when you have completed the task.

Your choose which controls you want to use for the task. Whether it's traditional controls or smart controls with annotations.

Tables to be used:
* SNWD_SO - Sales Order Header transactional data
* SNWD_SO_I - Sales Order Item transactional data
* SNWD_BPA - Partner master data
* SNWD_AD - Address master data
* SNWD_PD - Product master data

All objects are to be placed in package ZDEVELOPER_TEST
A CDS view have already been created for Sales Order header, sales order item and business partner.
But to complete the task data from other tables are needed.

Features required:
**Worklist:**
- Filter:
  - Add filter for overall status
  - Customer name
- Table:
  - When clicking the row, navigation to object page should happen
  - When clicking the customer name, a quick view should appear showing details like:
    - ID
    - Street
    - City
    - Postal code
    - Email
    - Web address
  - Statuses with semantic coloring ( Red for not processed, yellow for in process, green for completed)
    - Delivery
    - Billing
    - Overall

**Object Page**
- Object page should have a new layout based on the object page layout. The page should have the following sections:
  - Header
    - Sales Order Number
    - Customer name
    - Net amount
    - Gross Amount 
    - Status codes (Overall, delivery, billing)
  - Items
    - List with sales order items containing:
      - Item Position
      - net amount with currency
      -  Product name
 -  Customer Information
    -  Same as the quick view on the main screen

