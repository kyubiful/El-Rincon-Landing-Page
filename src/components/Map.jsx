export const Map = () => {
  return (
    <div className='flex justify-center'>
		  <iframe 
        title='map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1564996.2130951057!2d-5.153728439245882!3d39.994301031644305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6b39f0cbc3edcb%3A0x82a8feaf6d109e0a!2sCasa%20Rural%20El%20Rinc%C3%B3n!5e0!3m2!1ses!2ses!4v1689970402587!5m2!1ses!2ses' 
        style={{ border:0 }} 
        allowFullScreen='' 
        loading='lazy' 
        referrerPolicy='no-referrer-when-downgrade'
        className='rounded-xl md:w-[500px] h-[300px]'
      />
    </div>
  )
}