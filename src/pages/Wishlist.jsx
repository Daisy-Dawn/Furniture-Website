import WishlistCard from "../components/WishlistCard";

const Wishlist = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:px-[5rem] md:px-[2rem] px-[1rem]  md:py-[3rem] py-[2rem]">
      <WishlistCard />
      <WishlistCard />
      <WishlistCard />
      <WishlistCard />
    </section>
  )
}

export default Wishlist;