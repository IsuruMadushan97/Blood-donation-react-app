import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards(){
    return(
        <div className='cards'>
            <h1>Blood donation highlights</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='Image/Coronavirus.jpg'
                        text='Donation is allowed despite COVID19 restrictions and giving blood is as safe as it is always been'
                        label='Coronavirus update'
                        path='/news-and-campaigns'/>
                        <CardItem 
                        src='Image/blood-donation.jpg'
                        text='We always need new donors. Let us take you through the steps to becoming a donor and the process of getting that first appointment booked.'
                        label='Want to donate for the first time?'
                        path='/news-and-campaigns'/>
                    </ul>
                     <ul className='cards__items'>
                        <CardItem 
                        src='Image/blood-donation-2.jpg'
                        text='Donation is allowed despite COVID19 restrictions and giving blood is as safe as it is always been'
                        label='Coronavirus update'
                        path='/news-and-campaigns'/>
                        <CardItem 
                        src='Image/blood-donation-3.jpg'
                        text='Donation is allowed despite COVID19 restrictions and giving blood is as safe as it is always been'
                        label='Coronavirus update'
                        path='/news-and-campaigns'/>
                        <CardItem 
                        src='Image/blood-donation-4.jpg'
                        text='Donation is allowed despite COVID19 restrictions and giving blood is as safe as it is always been'
                        label='Coronavirus update'
                        path='/news-and-campaigns'/>


                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;