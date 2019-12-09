import React from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

    function RenderDish({ dish }) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    function RenderComments( { dish , comment }){
        if (dish != null){
            const comment=dish.comments.map((cm=>{
                return(
                    <ul key={cm.id} className="list-unstyled">
                        <li><p>{cm.comment}</p></li>
                        <li><p>--{cm.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cm.date)))}</p></li>
                    </ul>
                );
            }));
            return(
                <div className="row col-12 col-md-5 m-1">
                    
                    <Media>
                        <Media body>
                            <Media heading>Comment</Media>
                            {comment}
                        </Media>
                    </Media>
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }

    const DishDetail = (props)=>{
        
        return(
            <div class="container">
                    <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                        <RenderComments dish={props.dish} />
                    </div>   
            </div>
        );
}

export default DishDetail;