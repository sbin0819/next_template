import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import Test from '@components/Test'
const Container = styled.div``
const Home = () => {
    const [show, setShow] = useState(false)
    return (
        <Container>
            <h1>칠성사이다</h1>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h2>페이지 이동 테스트</h2>
                <Link href="/sub">Sub</Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h2>API 테스트</h2>
                <button
                    onClick={() => setShow((prev) => !prev)}
                    style={{ width: 100, height: 50, background: 'grey' }}
                >
                    버튼
                </button>
            </div>
            {show && <Test />}
        </Container>
    )
}

export default Home
