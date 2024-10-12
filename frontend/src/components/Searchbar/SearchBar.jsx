import './SearchBar.css'
import { Button, Container, Dropdown } from 'react-bootstrap'

const SearchBar = () => {
return (
    <div className='SearchBar py-2' style={{boxShadow: '0 1px 0 0 #eee'}}>
        <Container className="d-flex mx-auto gap-4 align-content-center">
            <div className="d-flex justify-content-between  px-1 border w-75 rounded">
                <input type="text" placeholder='ابحث هنا' className='border-0 w-75 py-1'/>
                <Dropdown className="d-flex justify-content-between">
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='border-0 border-right'>
                        المشتغلين
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="p-1"> أو </div>
            <Button className='text-white border-0 px-5 text-nowrap' style={{backgroundColor: '#1EAAAD'}}> اطلب عرض سعر </Button>
        </Container>
    </div>
)}

export default SearchBar