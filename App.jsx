showProductList = true
const [showProductList, setShowProductList] = useState(false);
<button
  onClick={() => setShowProductList(true)}
>
  Get Started
</button>
{
  showProductList ? (
    <ProductList />
  ) : (
    <LandingPage />
  )
}
