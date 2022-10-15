<script setup>
import Navbar_comp from '../components/navbar/navbar_comp.vue';
import Footer from '../components/footer.vue';
import Create_comment from '../components/create_comment.vue';
import Comment from '../components/comment.vue';

const movie = {
  'title':'O Telefone Preto',
  'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
  'content': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, pariatur. Similique hic iure maiores earum at expedita sunt natus eveniet facere, repellendus ea aut eius. Molestiae maxime blanditiis ipsa unde!',
  'author': 'Mari Mariana',
  'like': 22,
  'dislike': 13,
  'director': 'mari mariana',
  'release': 'mari mariana',
  'duration': 'mari mariana',
  'platform': 'mari mariana',
  'cast': 'mari mariana',
  'classification': 'mari mariana',
}
</script>

<template>
  <main class="pt-16 md:pt-28 lg:pt-24">
    <header class="fixed top-0 left-0 right-0 z-20">
      <Navbar_comp />
    </header>
    <section class="px-10 lg:px-32 py-3">
      <section class="flex flex-col xl:flex-row gap-10 justify-between mt-8">
        <div class="w-full lg:w-4/12 xl:w-4/12 md:flex xl:block">
          <img :src="movie.url_img" class="w-full md:w-5/12 xl:w-full md:mr-8 xl:mr-0 rounded-2xl" alt="">
          <div class="hidden md:block xl:hidden">
            <section class="flex flex-col mt-4">
              <div>
                <h2 class="text-xl py-4">
                  <span class="font-bold">Diretor:</span> {{movie.author}}
                </h2>
                <h2 class="text-xl py-4">
                  <span class="font-bold">Lançamento:</span> {{movie.author}}
                </h2>
                <h2 class="text-xl py-4">
                  <span class="font-bold">Duração:</span> {{movie.author}}
                </h2>
              </div>
              <div>
                <h2 class="text-xl py-4">
                  <span class="font-bold">Plataforma Dísponivel:</span> {{movie.author}}
                </h2>
                <h2 class="text-xl py-4">
                  <span class="font-bold">Elenco:</span> {{movie.author}}
                </h2>
                <h2 class="text-xl py-4">
                  <span class="font-bold">Classificação:</span> {{movie.author}}
                </h2>
              </div>
            </section>
          </div>
        </div>
        <div class="w-full xl:w-9/12">
          <h2 class="text-4xl pb-2">
            {{movie.title}}
          </h2>
          <p class="text-justify text-lg">
            {{movie.content}}
            {{movie.content}}
            {{movie.content}}
          </p>
          <section class="flex-col md:hidden xl:block gap-10 mt-4">
            <div>
              <h2 class="text-xl py-4">
                <span class="font-bold">Diretor:</span> {{movie.author}}
              </h2>
              <h2 class="text-xl py-4">
                <span class="font-bold">Lançamento:</span> {{movie.author}}
              </h2>
              <h2 class="text-xl py-4">
                <span class="font-bold">Duração:</span> {{movie.author}}
              </h2>
            </div>
            <div>
              <h2 class="text-xl py-4">
                <span class="font-bold">Plataforma Dísponivel:</span> {{movie.author}}
              </h2>
              <h2 class="text-xl py-4">
                <span class="font-bold">Elenco:</span> {{movie.author}}
              </h2>
              <h2 class="text-xl py-4">
                <span class="font-bold">Classificação:</span> {{movie.author}}
              </h2>
            </div>
          </section>
          <section class="py-8 flex gap-8">
            <button class="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
              </svg>
              {{movie.like}}
            </button>
            <button class="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-hand-thumbs-down" viewBox="0 0 16 16">
                <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z"/>
              </svg>
              {{movie.dislike}}
            </button>
          </section>
          <section class="pb-8 pt-4 rounded-3xl overflow-hidden">
            <div class="border rounded-t-3xl p-8 text-lg">
              <Create_comment />
            </div>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
          </section>
        </div>
      </section>
    </section>
    <Footer :key_btn=true></Footer>
  </main>
</template>