<template>
  <section class="ab-team">
    <div class="container">
      <!-- HEADER -->
      <div class="ab-team-header" data-aos="fade-up" data-aos-duration="900" data-aos-once="true">
        <span class="eyebrow gold">The Team</span>

        <h2 class="section-title">
          The people behind<br />
          <em>every cup.</em>
        </h2>
      </div>

      <!-- TEAM -->
      <div class="ab-team-grid">
        <div v-for="(member, index) in team" :key="member.id" class="ab-team-member"
          :class="`ab-team-member-${index + 1}`" data-aos="fade-up" data-aos-duration="800"
          :data-aos-delay="index * 150" data-aos-once="true">
          <div class="ab-team-photo-wrap">
            <div class="ab-team-photo" :style="{ backgroundImage: `url('${member.image}')` }"></div>

            <span class="ab-team-number">
              {{ String(index + 1).padStart(2, "0") }}
            </span>
          </div>

          <div class="ab-team-info">
            <h4 class="ab-team-name">
              {{ member.name }}
            </h4>

            <span class="ab-team-role">
              {{ member.role }}
            </span>

            <p>
              {{ member.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

const team: TeamMember[] = [
  {
    id: 1,
    name: "Bryan Zuloeta",
    role: "Administrador",
    description: "",
    image: "/img/about/lasetiopes.jpg",
  },
  {
    id: 2,
    name: "Merlith Cruz",
    role: "Managing Director",
    description: "",
    image: "/img/about/francohuaches.jpg",
  },
  {
    id: 3,
    name: "Simon Brown",
    role: " Managing Director",
    description: "",
    image: "/img/about/Andy_LLanos.JPG",
  },
  {
    id: 4,
    name: "Javier Lobo",
    role: "Shopping",
    description: "",
    image: "/img/about/nuevo-integrante.jpg",
  },
  {
    id: 5,
    name: "Karen Peña",
    role: "Laboratory Assistant",
    description: "",
    image: "/img/about/nuevo-integrante.jpg",
  },
  {
    id: 6,
    name: "Deyli Herrera",
    role: "Laboratory Assistant",
    description: "",
    image: "/img/about/nuevo-integrante.jpg",
  },
  {
    id: 7,
    name: "Larry Carlos",
    role: "Warehouse assistant",
    description: "",
    image: "/img/about/nuevo-integrante.jpg",
  },
  {
    id: 8,
    name: "Lyly Guerrero",
    role: "Accounting Assistant",
    description: "",
    image: "/img/about/nuevo-integrante.jpg",
  },
];
</script>

<style>
.ab-team {
  position: relative;
  background: var(--ivory-d);
  padding: 110px 0 140px;
  overflow: hidden;
}

.ab-team-header {
  max-width: 560px;
  margin: 0 auto 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.ab-team-header p {
  max-width: 500px;
  font-size: 14px;
  color: var(--text-m);
  line-height: 1.8;
}

.ab-team-grid {
  max-width: 1050px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  row-gap: 110px;

  align-items: start;
}

.ab-team-member-1 {
  grid-column: 2 / 4;
  grid-row: 1;
  justify-self: center;
}

.ab-team-member-2 {
  grid-column: 1 / 3;
  grid-row: 2;
  justify-self: center;
}

.ab-team-member-3 {
  grid-column: 3 / 5;
  grid-row: 2;
  justify-self: center;
}

.ab-team-member-4 {
  grid-column: 2 / 4;
  grid-row: 3;
  justify-self: center;
}

.ab-team-photo-wrap {
  width: 250px;
  height: 250px;
  margin: 0 auto 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ab-team-photo-wrap::before {
  content: "";
  position: absolute;
  inset: -9px;
  border: 1px solid rgba(180, 142, 72, 0.35);
  border-radius: 50%;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.4s ease;
}

.ab-team-photo-wrap::after {
  content: "";
  position: absolute;
  inset: -18px;
  border: 1px solid rgba(180, 142, 72, 0.1);
  border-radius: 50%;
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease;
}

.ab-team-photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: cover;
  background-position: center top;
  position: relative;
  z-index: 2;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease;
  overflow: hidden;
}

.ab-team-photo::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.18) 100%);
  opacity: 0.5;
  transition: opacity 0.4s ease;
}

.ab-team-number {
  position: absolute;
  right: -2px;
  bottom: 12px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--gold);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.08em;
  z-index: 4;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease, background 0.4s ease;
}

.ab-team-info {
  max-width: 310px;
  margin: 0 auto;
}

.ab-team-name {
  font-family: var(--ff-d);
  font-size: 25px;
  font-weight: 400;
  color: var(--text);
  margin-bottom: 7px;
  transition: color 0.3s ease;
}

.ab-team-role {
  display: block;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.17em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 14px;
}

.ab-team-info p {
  font-size: 13px;
  color: var(--text-m);
  line-height: 1.8;
  margin: 0;
}

.ab-team-member:hover .ab-team-photo {
  transform: scale(1.045);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.18);
}

.ab-team-member:hover .ab-team-photo-wrap::before {
  transform: scale(1.06);
  border-color: rgba(180, 142, 72, 0.75);
}

.ab-team-member:hover .ab-team-photo-wrap::after {
  transform: scale(1.12);
  opacity: 0.8;
}

.ab-team-member:hover .ab-team-photo::after {
  opacity: 0.8;
}

.ab-team-member:hover .ab-team-number {
  transform: scale(1.12) rotate(8deg);
}

.ab-team-member:hover .ab-team-name {
  color: var(--gold);
}

@media (max-width: 900px) {
  .ab-team {
    padding: 90px 30px 110px;
  }

  .ab-team-grid {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 15px;
    row-gap: 80px;
  }

  .ab-team-photo-wrap {
    width: 210px;
    height: 210px;
  }

  .ab-team-info {
    max-width: 280px;
  }
}


@media (max-width: 600px) {
  .ab-team {
    padding: 75px 20px 90px;
  }

  .ab-team-header {
    margin-bottom: 70px;
  }

  .ab-team-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
  }

  .ab-team-member-1,
  .ab-team-member-2,
  .ab-team-member-3,
  .ab-team-member-4 {
    width: 100%;
    margin: 0;
  }

  .ab-team-photo-wrap {
    width: 220px;
    height: 220px;
  }

  .ab-team-name {
    font-size: 23px;
  }

  .ab-team-info {
    max-width: 340px;
  }
}

@media (prefers-reduced-motion: reduce) {

  .ab-team-photo,
  .ab-team-photo-wrap::before,
  .ab-team-photo-wrap::after,
  .ab-team-number,
  .ab-team-name {
    transition: none;
  }
}
</style>