import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
    Row,
    Col,
    Image,
    ListGroup,
    Card,
    Button,
    ListGroupItem
} from 'react-bootstrap';
import products from '../products';
import Rating from '../components/Rating';

const ProductScreen = () => {
    const { id: productId } = useParams();
    const product = products.find((p) => p._id == productId)
  return (
    <>
        <Link to="/" className="btn btn-light my-3">Go Back</Link>
        <Row>
            <Col md={5}>
                <Image src={product.image} alt={product.name} fluid></Image>
            </Col>
            <Col md={4}>
                <ListGroup variant="flush">
                    <ListGroupItem>
                        <h3>{product.name}</h3>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Rating value={product.rating} text={`${product.numReviews}`} />
                    </ListGroupItem>
                    <ListGroupItem className='mt-4'>
                        {product.description}
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col><strong>${product.price}</strong></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col><strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button 
                                className='btn-block' 
                                type='button'
                                disabled={product.countInStock == 0}
                                >
                                Add to Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
  )
}

export default ProductScreen