import React from "react";

const Faq = () => {
  return (
    <>
      <div class="accordion">
        <div class="accordion-item relative mb-3">
          <h6 class="mb-0">
            <button
              class="accordion-button text-left font-semibold"
              type="button"
              aria-expanded="false"
            >
              <span>How do I order?</span>
              <i class="fa fa-plus collapse-close absolute right-0 pt-1 text-xs"></i>
              <i class="fa fa-minus collapse-open absolute right-0 pt-1 text-xs"></i>
            </button>
          </h6>
          <div class="collapse open">
            <div class="py-4 text-sm opacity-60">
              We're not always in the position that we want to be at. We're
              constantly growing. We're constantly making mistakes. We're
              constantly trying to express ourselves and actualize our dreams.
              If you have the opportunity to play this game of life you need to
              appreciate every moment. A lot of people don't appreciate the
              moment until it's passed.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
