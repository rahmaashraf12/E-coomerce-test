import React from 'react'
import Products from '../Containers/Products'
import photo from '../../assets/photo3.jpg'
import '../../App'
import '../Styles/Home.css'
import Review from '../Utilities/Review'
import people from '../Utilities/data'
export default function Home() {
    return (
        < >
            <div >
                <img src=" https://www.lux-review.com/wp-content/uploads/2021/06/Summer-fashion.jpg" class="img-fluid" alt="Responsive image"></img>


                <div>
                    <div class="card-container">
                        <div class="cards">

                            <div className='card-content'>

                            </div>

                        </div>
                        <div class="card-container">
                            <div class="cards">

                                <div className='card-content'>

                                </div>

                            </div>
                            <div class="card-container">
                                <div class="cards">

                                    <div className='card-content'>
                                        <h3> </h3>
                                        <p> </p>
                                    </div>

                                </div>

                            </div>
                        </div>




                    </div>
                </div>

            </div>
            <div className='wordimage'>

            </div>

            <div>
                <img src="https://www.shutterstock.com/image-photo/fashion-women-stylish-accessories-outfit-600nw-1532053424.jpg" class="rounded mx-auto d-block" alt="..." style={{ margin: '30px', width: '40%' }}></img>
            </div >

            <div className='wordimage'>
                <h1>   </h1>
            </div>
            <div>
                <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>Electronics</h1>
            </div>
            <div>
                <img src="  https://img.freepik.com/premium-vector/realistic-digital-devices-isometry-set-isometric-illustrations_480270-71.jpg" alt="..." class="img-thumbnail" style={{ 'margin-left': '150px', width: '30%' }}></img>
                <img src=" https://southfloridareporter.com/wp-content/uploads/2020/12/electronic-devices-composition_23-2147791607.jpg" alt="..." class="img-thumbnail" style={{ 'margin-left': '150px', width: '30%' }}></img>
            </div>  <img src=" https://images.unsplash.com/photo-1526406915894-7bcd65f60845?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pYyUyMGRldmljZXxlbnwwfHwwfHx8MA%3D%3D" alt="..." class="img-thumbnail" style={{ 'margin-left': '150px', width: '30%' }}></img>
            <img src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg" alt="..." class="img-thumbnail" style={{ 'margin-left': '150px', width: '30%' }}></img>

            <hr></hr>
            <div>
                <h1 style={{ textAlign: 'center', marginBottom: '50px', fontFamily: 'Serif', color: 'brown' }}>review</h1>
                <Review /></div>
        </ >



    )
}
