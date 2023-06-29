export default function ListPendingReceipt() {
    return (
        <>
            <div>
                <div className={"row"}>
                    <div className={"col-4"}>
                        <div style={{display: "flex"}}>
                            <h5>Ten Nguoi mua</h5>
                            <i style={{margin: "3px 0 0 10px"}} className="fa-regular fa-comment"></i>
                        </div>
                    </div>
                    <div className={"col-2"}></div>
                    <div className={"col-2"}></div>
                    <div className={"col-2"}></div>
                    <div className={"col-2"}>
                        <p>Ma van don</p>
                    </div>
                </div>
                <div className={"row"}>
                    <div className="col-4" style={{ display: "flex", alignItems: "center" }}>
                        <img style={{ width: "100px", marginRight: "10px" }}
                             src="https://th.bing.com/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                             alt=""/>
                        <div>
                            <h5>Ten san pham</h5>
                            <div style={{display:"flex"}}>
                                <p>The loai</p>
                                <p style={{marginLeft:"10px"}}>x1</p>
                            </div>
                        </div>
                    </div>
                    <div className={"col-2"}>
                        <h5>Price</h5>
                        <p>Ghi chu</p>
                    </div>
                    <div className={"col-2"}>
                        <h5>Trang thai</h5>
                        <p>Chu thich</p>
                    </div>
                    <div className={"col-2"}>
                        <h5>Giao nhanh</h5>
                        <p>Chu thich</p>
                    </div>
                    <div className={"col-2"}>
                        <i  className="fa-solid fa-hand-point-right"></i>
                        <button style={{marginLeft:10}} class="btn btn-secondary"> Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}