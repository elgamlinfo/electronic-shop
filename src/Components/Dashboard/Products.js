import React from 'react'
import './products.scss'
import Title from './Title'

const Products = () => {
    return (
        <div className='dash_products'>
            <Title title="products"/>
            <div className='product_form_cont'>
                <form>
                    <div className='row'>
                        <div className='input_group'>
                            <label htmlFor='title'>title</label>
                            <input type='text' name='title'id='title'/>
                        </div>
                        <div className='input_group'>
                            <label htmlFor="description">description</label>
                            <input type='text' name='description'id='description'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input_group'>
                            <label htmlFor='company'>company</label>
                            <input type='text' name='company'id='company'/>
                        </div>
                        <div className='input_group'>
                            <label htmlFor='category'>category</label>
                            <select name='category'>
                                <option value='apple'>test1</option>
                                <option value='apple'>test2</option>
                                <option value='apple'>test3</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input_group'>
                            <label htmlFor='specifications'>specifications</label>
                            <textarea name='specifications' id='specifications'>

                            </textarea>
                        </div>
                        <div className='input_group'>
                            <label htmlFor='images'>image</label>
                            <input type='file' name='image' id='image' multiple/>
                        </div>
                    </div>
                    <button>save</button>
                </form>
            </div>
        </div>
    )
}

export default Products
