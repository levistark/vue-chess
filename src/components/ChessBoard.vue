<script setup lang="ts">
  import {ref} from 'vue'
  import ChessSquare from './ChessSquare.vue'
  import WhitePawn from './WhitePawn.vue'
  const selectedSquare = ref(0)

</script>

<template>
<div class="chess-board">
    <div id="h8" class="square black" data-square-coordinate="70">70</div>
    <div id="h7" class="square white" data-square-coordinate="71">71</div>
    <div id="h6" class="square black" data-square-coordinate="72">72</div>
    <div id="h5" class="square white" data-square-coordinate="73">73</div>
    <div id="h4" class="square black" data-square-coordinate="74">74</div>
    <div id="h3" class="square white" data-square-coordinate="75">75</div>
    <div id="h2" class="square black" data-square-coordinate="76">76</div>
    <div id="h1" class="square white" data-square-coordinate="77">77</div>
    <div id="g8" class="square white" data-square-coordinate="60">60</div>
    <div id="g7" class="square black" data-square-coordinate="61">61</div>
    <div id="g6" class="square white" data-square-coordinate="62">62</div>
    <div id="g5" class="square black" data-square-coordinate="63">63</div>
    <div id="g4" class="square white" data-square-coordinate="64">64</div>
    <div id="g3" class="square black" data-square-coordinate="65">65</div>
    <div id="g2" class="square white" data-square-coordinate="66">66</div>
    <div id="g1" class="square black" data-square-coordinate="67">67</div>
    <div id="f8" class="square black" data-square-coordinate="50">50</div>
    <div id="f7" class="square white" data-square-coordinate="51">51</div>
    <div id="f6" class="square black" data-square-coordinate="52">52</div>
    <div id="f5" class="square white" data-square-coordinate="53">53</div>
    <div id="f4" class="square black" data-square-coordinate="54">54</div>
    <div id="f3" class="square white" data-square-coordinate="55">55</div>
    <div id="f2" class="square black" data-square-coordinate="56">56</div>
    <div id="f1" class="square white" data-square-coordinate="57">57</div>
    <div id="e8" class="square white" data-square-coordinate="40">40</div>
    <div id="e7" class="square black" data-square-coordinate="41">41</div>
    <div id="e6" class="square white" data-square-coordinate="42">42</div>
    <div id="e5" class="square black" data-square-coordinate="43">43</div>
    <div id="e4" class="square white" data-square-coordinate="44">44</div>
    <div id="e3" class="square black" data-square-coordinate="45">45</div>
    <div id="e2" class="square white" data-square-coordinate="46">46</div>
    <div id="e1" class="square black" data-square-coordinate="47">47</div>
    <div id="d8" class="square black" data-square-coordinate="30">30</div>
    <div id="d7" class="square white" data-square-coordinate="31">31</div>
    <div id="d6" class="square black" data-square-coordinate="32">32</div>
    <div id="d5" class="square white" data-square-coordinate="33">33</div>
    <div id="d4" class="square black" data-square-coordinate="34">34</div>
    <div id="d3" class="square white" data-square-coordinate="35">35</div>
    <div id="d2" class="square black" data-square-coordinate="36">36</div>
    <div id="d1" class="square white" data-square-coordinate="37">37</div>
    <div id="c8" class="square white" data-square-coordinate="20">20</div>
    <div id="c7" class="square black" data-square-coordinate="21">21</div>
    <div id="c6" class="square white" data-square-coordinate="22">22</div>
    <div id="c5" class="square black" data-square-coordinate="23">23</div>
    <div id="c4" class="square white" data-square-coordinate="24">24</div>
    <div id="c3" class="square black" data-square-coordinate="25">25</div>
    <div id="c2" class="square white" data-square-coordinate="26">26</div>
    <div id="c1" class="square black" data-square-coordinate="27">27</div>
    <div id="b8" class="square black" data-square-coordinate="10">10</div>
    <div id="b7" class="square white" data-square-coordinate="11">11</div>
    <div id="b6" class="square black" data-square-coordinate="12">12</div>
    <div id="b5" class="square white" data-square-coordinate="13">13</div>
    <div id="b4" class="square black" data-square-coordinate="14">14</div>
    <div id="b3" class="square white" data-square-coordinate="15">15</div>
    <div id="b2" class="square black" data-square-coordinate="16">16</div>
    <div id="b1" class="square white" data-square-coordinate="17">17</div>
    <div id="a8" class="square white" data-square-coordinate="00">00</div>
    <div id="a7" class="square black" data-square-coordinate="01">01</div>
    <div id="a6" class="square white" data-square-coordinate="02">02</div>
    <div id="a5" class="square black" data-square-coordinate="03">03</div>
    <div id="a4" class="square white" data-square-coordinate="04">04</div>
    <div id="a3" class="square black" data-square-coordinate="05">05</div>
    <ChessSquare :is-white="true" :square-coordinates="[0,6]" :square-id="a2" />
    <div id="a1" class="square black" data-square-coordinate="07">07</div>
  </div>
</template>

<style scoped>

.chess-board {
  display: grid;
  grid-template-columns: repeat(8, 1fr);  
}

</style>
