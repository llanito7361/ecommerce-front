import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
              <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, molestias est beatae quaerat animi cum, commodi in quia nemo rerum, voluptates eaque voluptatum fugiat tempore ea alias exercitationem aperiam eos.</p>
              <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore distinctio placeat unde quaerat adipisci, accusantium doloribus rerum, tempora porro assumenda vel reprehenderit ullam? Iste eveniet cumque ipsam, illum quisquam qui.</p>
            </div>
    </div>
  )
}

export default DescriptionBox