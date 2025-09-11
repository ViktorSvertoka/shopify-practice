class ProductSubscriptions extends HTMLElement {
  constructor() {
    super()

    this.input = this.querySelector('input[name="selling_plan"]')
    this.options = this.querySelectorAll('input[name="purchase_option"]')
    this.select = this.querySelector('select[name="purchase_option_values"]')

    this.initialise()
  }

  initialise() {
    this.options.forEach((option) =>
      option.addEventListener('click', this.onRadioChange.bind(this))
    )
    this.select.addEventListener('change', this.onSelectChange.bind(this))
  }

  onRadioChange(e) {
    this.input.value = e.target.value;
  }
  
  getCurrentSellingPlanId() {
    return this.input.value;
  }
}

if (!customElements.get('product-subscriptions')) {
  customElements.define('product-subscriptions', ProductSubscriptions)
}

window.ProductSubscriptions = ProductSubscriptions;

window.getCurrentSellingPlanId = function() {
  const productSubscriptions = document.querySelector('product-subscriptions');
  console.log(productSubscriptions)
  return productSubscriptions ? productSubscriptions.getCurrentSellingPlanId() : '';
};