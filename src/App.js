import './App.css';

import Store from './components/Store/Store';

import { useState } from 'react';


function App() {

  const [item, setItem] = useState([
    {
      title: "Our Favorite Mac",
      name: "Apple MacBook Air (M1, 2020)",
      desc: "The MacBook Air remains the Mac to get. Apple upgraded this 13-incher in November 2020 (9/10, WIRED Recommends), ditching Intel chips for its own M1 processor. The results are impressive. Battery life is great, easily lasting more than a full workday. Perhaps more surprising is the excellent performance, even in apps made for Intel-powered machines.",
      price: 999,
      img: 'https://res-3.cloudinary.com/grover/image/upload/e_trim/c_limit,f_auto,fl_png8.lossy,h_2240,q_auto,w_2240/v1624260920/a0gznsvhxifnnwaife5j.png'
    },
    {
      title: "A Great Windows Laptop",
      name: "Acer Swift 3X",
      desc: "Intel is in the middle of a graphics revolution, and the Acer Swift 3X was one of the first devices to sport its XE Graphics technology. The GPU won't give you high-end gaming performance—far from it. But it does provide a graphical boost, making this light, thin machine capable of entry-level content creation.",
      price: 920,
      img: "https://static.acer.com/up/Resource/Acer/Laptops/Swift_3X/Images/20201008/Acer-Swift-3X_SF314-510G_Gold_modelpreview.png"
    },
    {
      title: "An Extra Sleek Windows PC",
      name: "Dell XPS 13 (2021)",
      desc: "Dell’s XPS 13 (9/10, WIRED Recommends) has been kicking around since 2012 and remains one of the most popular thin and light laptops out there. Dell released an update late in 2021, adding an option for an OLED screen, but the design is otherwise the same.",
      price: 1570,
      img: "https://freebiescloud.com/wp-content/uploads/2020/10/2-115.png"
    },
    {
      title: "Best 2-in-1",
      name: "Samsung Galaxy Book Pro 360",
      desc: "The trouble with many “2-in-1” laptops is that, in tablet mode, they feel cumbersome and just not worthy of the hybrid moniker. Not so with the Galaxy Book Pro 360. This laptop is sturdy, luxurious to the touch, and lightweight all in one. Then, there's the immensely accurate included S Pen for added tablet fun.",
      price: 1010,
      img: "https://images.samsung.com/is/image/samsung/p6pim/uk/np955xed-ka1uk/gallery/uk-galaxy-book2-pro-5g-15inch-np955xeda-np955xed-ka1uk-531373765?$1300_1038_PNG$"
    },
    {
      title: "Best 17-inch Laptop",
      name: "LG Gram 17",
      desc: "The LG Gram range is different from other top-quality laptops. It's supremely lightweight. The 17-inch model showcases this the most, making what you’d think is a ridiculously sized device a reasonable purchase.",
      price: 1393,
      img: "https://www.lg.com/uk/lg-gram/images/17gram-waves.png"
    },
    {
      title: "A Maxed-Out Mac",
      name: "MacBook Pro (16-inch M1 Max, 2021)",
      desc: "Need all the power the Mac world has to offer? The 16-inch MacBook with the M1 Max chip delivers. This is a video-editing, game-playing powerhouse of a laptop.",
      price: 3499,
      img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP858/mbp16-gray.png"
    },
    {
      title: "Another Elegant Windows Laptop",
      name: "Microsoft Surface Laptop 4",
      desc: "It might not be as flashy as the hybrid tablet-laptop design that made Microsoft's Surface brand famous, but the new Surface Laptop 4 is everything a laptop should be: slim and lightweight with an excellent screen and keyboard.",
      price: 800,
      img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWBrzy?ver=85d4"
    },
    {
      title: "Not Quite a Laptop",
      name: "Microsoft Surface Go 3",
      desc: "Microsoft's Surface Go 3 (6/10, WIRED Review) has a design that stands out on this list for its diminutive size and unique form factor. It's a Surface tablet with a detachable keyboard and stylus pen (both sold separately)—not your standard laptop. It has the same premium build as its more expensive Surface brethren, a colorful, sharp display, and even Windows Hello facial recognition.",
      price: 630,
      img: "https://www.jing.fm/clipimg/full/30-305544_laptop-clipart-gadgets-surface-go-tablet.png"
    },
  ])

  return (
    <div className="App">
      <div className='wrapper'>
        {item.map(block => Store(block))}
      </div>
    </div>
  );
}

export default App;
