'use client'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentPage from '@components/PaymentPage'


const stripePromise = loadStripe('pk_test_51N1PcsAy6kbtVnGKlyJx5DyytFICTbgbKgPvPIktWBsl9Wj2uLYknc9KQh6iN3x6DvZTt8096LdpPO9JIVQ67QRR006UMJ6HYo');

const Payment = () => {

  return (
   <Elements stripe={stripePromise} >
    <div className='text-sm'>
     
      <PaymentPage />
    </div>
   </Elements>
  );
};

export default Payment;
