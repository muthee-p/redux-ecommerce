'use client'

import React from 'react';
import { useSession } from "next-auth/react";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ReceiptDownload = ({ formattedDate, orderNumber, paymentId, calculateTotalCost, shippingValue, cartItems, shippingOption, couponCode, totalCost }) => {
  const { data: session } = useSession();

  const generateReceipt = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);

    doc.text('YouShop: Timeless Elegance', 20, 20);
    doc.text('90001, YouShop Street', 20, 30);
    doc.text('NewHill, Sc, 1256855895', 20, 40);
    doc.text('0700-000-000', 20, 50);

    doc.text(`Order: ${orderNumber}`, 20, 70);

    if (session) {
      doc.text(`Receipt for: ${session.user.name}`, 20, 80);
    }

    doc.text(`Date: ${formattedDate}`, 20, 90);

    // Draw table headers
    doc.autoTable({
      startY: 100,
      head: [['Qty', 'Item', 'Price']],
      theme: 'plain',
    });

    // Prepare data for the table
    const tableData = cartItems.map(item => [item.quantity, item.name, item.totalPrice]);

    // Add data to the table
    doc.autoTable({
      startY: 110,
      body: tableData,
      theme: 'plain',
    });

    // Calculate Y position for the summary table
    const summaryTableY = 110 + (cartItems.length * 10) + 10;

    // Draw summary table
    doc.autoTable({
      startY: summaryTableY,
      body: [
        ['Subtotal', `$${totalCost}`],
        ['Shipping', `${shippingOption} of ${shippingValue}`],
        ['Coupon Code', `${couponCode}${couponCode === 'YOUSHOP' ? ' - $10' : ' X'}`],
        ['Total', `$${calculateTotalCost}`],
        ['Transaction Type', 'Sale'],
        ['Authorization', 'Approved'],
        ['Payment Id', paymentId],
        ['', '+ Tip: _______________'],
        ['', '- Total: _____________'],
      ],
      theme: 'plain',
    });

    // Add a line for the signature
    doc.text('X ____________________________________', 20, summaryTableY + 120);

    // Add footer
    doc.text('CUSTOMER COPY', 20, summaryTableY + 140);
    doc.text('THANK YOU FOR SHOPPING WITH US', 20, summaryTableY + 150);
    doc.text('YOU SHOP', 20, summaryTableY + 160);

    return doc;
  };

  const handleReceiptDownload = () => {
    const doc = generateReceipt();

    // Save the PDF
    doc.save('youShopReceipt.pdf');
  };

  return (
    <button className='bg-black py-1 px-4 text-white' onClick={handleReceiptDownload}>
      Download Receipt
    </button>
  );
};

export default ReceiptDownload;
