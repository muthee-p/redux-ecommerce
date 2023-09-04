'use client'

import { useSession } from "next-auth/react";
import html2pdf from 'html2pdf.js';


const ReceiptDownload = ({formattedDate, orderNumber,paymentId, calculateTotalCost, shippingValue, cartItems, shippingOption, setShippingOption, couponCode, totalCost}) => {
  const { data: session } = useSession();

  const generateReceipt= () =>{
    return `
    <div>
          <div className='flex flex-col items-center py-4'>
            <h2 className='font-semibold'>YouShop: Timeless Elegance</h2>
            <p>90001, YouShop Street</p>
            <p>NewHill, Sc, 1256855895</p>
            <p className='text-xs'>0700-000-000</p>
          </div>

          <div>
            <h2 className='text-xl font-semibold'>Order: {orderNumber}</h2>
           
            {session && (
              <p>Receipt for: {session.user.name}</p>
            )}

            <p>Date: {formattedDate}</p>
          </div>

          <table className='border-y border-black mt-4 w-full' >
            <tr>
              <td className='w-1/4'>Qty</td>
              <td className='w-2/4'>Item</td>
              <td className='w-1/4'>Price</td>
            </tr>
          {cartItems.map(item =>(
            
            <tr key={item.id} >
              <td className='py-1'>{item.quantity}</td>
              <td className='py-1'>{item.name}</td>
              <td className='py-1'>{item.totalPrice}</td>
            </tr>
           
            ))} 
          </table>

          <table className='mt-4 w-full'>
            <tr>
              <td>Subtotal</td>
              <td className='text-right'>${totalCost}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td className='text-right'>{shippingOption} of {shippingValue}</td>
            </tr>
            <tr>
              <td>Coupon Code</td>
              <td className='text-right'>{couponCode}
              {couponCode === 'YOUSHOP' ? (
                <span className=" ml-2">- $10</span>
              ) : (
                <span className="ml-2">X</span>
              )}
            </td></td>
            </tr>
            <tr>
              <td>Total</td>
              <td className='text-right'>${calculateTotalCost}</td>
            </tr>
            <tr>
              <td>Transaction Type</td>
              <td className='text-right'>Sale</td>
            </tr>
            <tr>
              <td>Authorization</td>
              <td className='text-right'>Approved</td>
            </tr>
            <tr>
              <td>Payment Id</td>
              <td className='text-right'>{paymentId}</td>
            </tr>
            <tr>
              <td ></td>
              <td className='pt-2'>+ Tip: _______________</td>
            </tr>
             <tr>
              <td></td>
              <td>- Total: _____________</td>
            </tr>
          </table>

          <p className='py-4'>X ____________________________________ </p>
         
          <div className='text-center py-8'>
            <p>CUSTOMER COPY</p>
            <p>THANK YOU FOR SHIPPING WITH US</p>
            <p>YOU SHOP</p>
          </div>
         
    </div>`
  }

const handleReceiptDownload =() => {
  const receiptContent = generateReceipt();

  const options = {
    margin:10,
    filename: 'youShopReceipt.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a6', orientation: 'portrait' },
  }

  const pdfElement = document.getElementById('receipt-pdf');
    html2pdf()
      .from(pdfElement)
      .set(options)
      .outputPdf()
      .then((pdf) => {
        pdf.save();
      });
};

  
   

  return (
     <button className=''
     onClick={handleReceiptDownload} >
        Download Receipt
    </button>
  );
};

export default ReceiptDownload;