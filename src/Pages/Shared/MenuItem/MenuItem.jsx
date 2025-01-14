const MenuItem = ({item}) => {
    const {name, image, price, description} = item;
    return (
        <div className="flex space-x-5">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px] h-[100px] object-cover rounded-[200px_200px_200px_200px]" src={image} alt="" />
            <div>
                <h3 className="uppercase text-lg cinzel mb-2">{name}----------</h3>
                <p>{description}</p> 
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;