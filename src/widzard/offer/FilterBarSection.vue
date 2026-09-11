<template>
    <section class="filters-section">
      <div class="container">
        <div class="filters-bar">
          <div class="filter-group">
            <span class="filter-label">Category</span>
            <div class="filter-pills" data-filter-group="category">
              <button class="filter-pill active" data-value="all">All</button>
              <button class="filter-pill" data-value="regional">
                Regional Blends
              </button>
              <button class="filter-pill" data-value="microlot">
                Microlots
              </button>
              <button class="filter-pill" data-value="experimental">
                Experimental
              </button>
            </div>
          </div>

          <div class="filter-group">
            <span class="filter-label">Process</span>
            <div class="filter-pills" data-filter-group="process">
              <button class="filter-pill active" data-value="all">All</button>
              <button class="filter-pill" data-value="washed">Washed</button>
              <button class="filter-pill" data-value="natural">Natural</button>
              <button class="filter-pill" data-value="honey">Honey</button>
              <button class="filter-pill" data-value="anaerobic">
                Anaerobic
              </button>
            </div>
          </div>

          <div class="filter-group">
            <span class="filter-label">Origin</span>
            <select class="filter-select" id="originSelect">
              <option value="all">All Origins</option>
              <option value="jaen">Jaén</option>
              <option value="san-ignacio">San Ignacio</option>
              <option value="cutervo">Cutervo</option>
              <option value="cajamarca">Cajamarca</option>
              <option value="queromarca">Queromarca</option>
              <option value="callayuc">Callayuc</option>
            </select>
          </div>

          <div class="filter-results">
            <span id="resultsCount">12</span> lots found
          </div>
        </div>
      </div>
    </section>
</template>

<style>
.filters-section {
  background: var(--ivory);
  padding: 32px 0;
  border-bottom: 1px solid var(--ivory-d);
  position: sticky;
  top: 84px;
  z-index: 50;
  backdrop-filter: blur(8px);
}

.filters-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filter-label {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--text-l);
}

.filter-pills {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.filter-pill {
  padding: 7px 14px;
  font-size: 11px;
  font-weight: 600;
  border-radius: 20px;
  border: 1.5px solid var(--ivory-d);
  background: var(--white);
  color: var(--text-m);
  cursor: pointer;
  transition: all var(--tr);
}

.filter-pill:hover {
  border-color: var(--gold);
  color: var(--text);
}

.filter-pill.active {
  background: var(--green);
  border-color: var(--green);
  color: var(--white);
}

.filter-select {
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  border: 1.5px solid var(--ivory-d);
  background: var(--white);
  color: var(--text);
  cursor: pointer;
}

.filter-results {
  margin-left: auto;
  font-size: 12px;
  color: var(--text-l);
  font-weight: 500;
}

.filter-results span {
  color: var(--green);
  font-weight: 700;
}
</style> 