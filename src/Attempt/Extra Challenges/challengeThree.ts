// As a distributor, SupplyHouse receives daily inventory feeds from our suppliers and needs to extract data to store
// in our supplier inventory table. We want to have an automated job, scheduled daily, that processes each supplier
// file from a common directory and inserts into/updates table SUPPLIER_PRODUCT.

// Table  SUPPLIER_PRODUCT

//     Column             Notes
//     SUPPLIER_ID *      Primary key is (SUPPLIER_ID, PRODUCT_ID)
//     PRODUCT_ID *
//     QUANTITY

// The feeds are different for each supplier, and the type can be either tab-delimited text, CSV, or Excel files. They are
// transferred to the same directory on our server with standardized names (<supplierID>.extension). Some
// suppliers may have extra columns in the feed, but they all guarantee to provide one column containing the product
// ID and one column containing the quantity (whose column indices can vary from supplier to supplier). Each
// product ID appears only once in a file.
// Sample supplier feeds:

// - Supplier A (CSV):
// Product,Price,Quantity,LastUpdated

// DEFG,40.17,2,2013-10-02
// ABC,10.30,15,2014-11-26
// HIJ,152.45,53,2014-02-17

// - Supplier B (tab-delimited):
// row_number product brand inventory
// 1 KLMN Honeywell 34
// 2 HIJ Taco 452
// 3 OPQ Panasonic 77
// 4 ABC Taco 10

// Design the Java/typescript classes, their member variables and methods signatures to support this automation project, with a
// focus on how to handle different file types and formats. Feel free to use supporting database tables if necessary
// (specify columns, primary keys, foreign keys). As with Question 1, please include any assumptions you make.
// Deliverables:
// - Java files with class skeletons, and sufficient in-file documentation. Don't implement any method, as we are only
// interested in how you design data structures.
// - A document file (text, Word, PDF, or any format that we can likely open) describing the database schema, if you
// use tables.
