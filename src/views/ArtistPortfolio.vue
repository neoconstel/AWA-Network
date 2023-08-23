<template class="bg-gray-800">
    <section class="header dashboard">
        <div class="grid grid-cols-2 pb-16">
            <div class="grid pl-16 pr-24" style="grid-template-rows: 5fr 3fr;">
                <div class="grid" style="grid-template-columns: 2fr 5fr;">
                    <div class="" style="aspect-ratio: 1/1;">
                        <img class="w-full h-full rounded-full" src="https://i.imgur.com/40qCewV.jpg" alt="">
                    </div>
                    <div class="pl-20 text-gray-200">
                        <h3>Sarah White</h3>
                        <p><img class="inline w-4 mr-1" src="/icons/iconmonstr-location-19.svg" alt=""><span
                                class="text-sm text-gray-400">Wysteria Lane, California</span></p>
                        <p class="mt-3">Tech support and Analyst, Visual Artist, Animator and 3D Generalist</p>
                        <p class="mt-2 text-yellow-300"><a
                                href="http://www.animationwestafrica.com">www.animationwestafrica.com</a></p>

                    </div>
                </div>
                <div class="grid grid-cols-2 gap-x-3 [&>*]:mt-auto">
                    <RippleButton class="bg-yellow-300 text-gray-900" :buttonText="'Follow'" />
                    <RippleButton class="text-gray-900" :buttonText="'Message'" />
                </div>
            </div>
            <div class="grid grid-rows-3 pl-24 pr-16 text-gray-300">
                <div class="grid grid-cols-4 [&>*]:space-y-1 border-b-gray-500" style="border-bottom-width: 1px;">
                    <div>
                        <p class="text-2xl">435251</p>
                        <p><img class="inline w-4 mr-1" src="/icons/iconmonstr-eye-lined.svg" alt=""><span
                                class="text-xs"><b>VIEWS</b></span>
                        </p>
                    </div>
                    <div>
                        <p class="text-2xl">234890</p>
                        <p><img class="inline w-4 mr-1" src="/icons/iconmonstr-thumb-10.svg" alt=""><span
                                class="text-xs"><b>LIKES</b></span>
                        </p>
                    </div>
                    <div>
                        <p class="text-2xl">35465</p>
                        <p><img class="inline w-4 mr-1" src="/icons/iconmonstr-user-6.svg" alt=""><span
                                class="text-xs"><b>FOLLOWERS</b></span>
                        </p>
                    </div>
                    <div>
                        <p class="text-2xl">5652</p>
                        <p><img class="inline w-4 mr-1" src="/icons/iconmonstr-user-6.svg" alt=""><span
                                class="text-xs"><b>FOLLOWING</b></span>
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-5 [&>*]:w-8 [&>*]:h-8 gap-x-14 [&>*]:my-auto">
                    <img src="/icons/iconmonstr-mail-thin.svg" alt="">
                    <img src="/icons/iconmonstr-facebook-1.svg" alt="">
                    <img src="/icons/iconmonstr-instagram-11.svg" alt="">
                    <img src="/icons/iconmonstr-linkedin-1.svg" alt="">
                    <img src="/icons/iconmonstr-twitter-1.svg" alt="">
                </div>
                <div class="flex items-center ali border-t-gray-500" style="border-top-width: 1px;">
                    <p class=""><b>Tools:</b> Maya, Cinema 4D, Blender, Photoshop, Illustrator, After Effects
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="tabs text-gray-300">
        <div class="grid gap-x-1" style="grid-template-columns: 2fr 1fr 1fr 5fr">
            <div class="relative">
                <a @click.prevent="this.tab = 'projects'"
                    :class='["px-4 py-6 w-full bg-gray-900 hover:bg-gray-800 inline-block text-right", projectTabColor("projects")]'
                    href="">Projects</a>
                <p v-show="tab == 'projects'" class="bg-yellow-300 h-2 w-1/2 absolute right-0"></p>
            </div>
            <div class="relative">
                <a @click.prevent="this.tab = 'followers'"
                    :class='["px-4 py-6 w-full bg-gray-900 hover:bg-gray-800 inline-block text-center", projectTabColor("followers")]'
                    href="">Followers</a>
                <p v-show="tab == 'followers'" class="bg-yellow-300 h-2 w-full absolute"></p>
            </div>
            <div class="relative">
                <a @click.prevent="this.tab = 'following'"
                    :class='["px-4 py-6 w-full bg-gray-900 hover:bg-gray-800 inline-block text-center", projectTabColor("following")]'
                    href="">Following</a>
                <p v-show="tab == 'following'" class="bg-yellow-300 h-2 w-full absolute"></p>
            </div>
            <div class="relative">
                <a @click.prevent="this.tab = 'likes'"
                    :class='["px-4 py-6 w-full bg-gray-900 hover:bg-gray-800 inline-block", projectTabColor("likes")]'
                    href="">Likes</a>
                <p v-show="tab == 'likes'" class="bg-yellow-300 h-2 w-1/4 absolute"></p>
            </div>
        </div>
    </section>
    <div class="stuff h-72 bg-gray-700">
        Artist works
    </div>
</template>

<script>

export default {

    name: 'ArtistPortfolio',
    data() {
        return {
            'tab': 'projects'
        }
    },
    components: {

    },
    methods: {
        projectTabColor(tabName) {
            if (this.tab == tabName)
                return 'text-yellow-300'
            return 'text-gray-300'
        }
    },
    computed: {

    }
}

</script>
