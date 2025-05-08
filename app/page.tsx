'use client';

import { useState, useEffect } from 'react';
import { CustomSelect } from '@boxpistols/react-map-vite';
import { Typography } from '@mui/material';
import { useTheme } from '@/hooks/useTheme';

export default function Page() {
    const [activeTab, setActiveTab] = useState('flight');
    const [, setSelectedColor] = useState('red');
    const { mode, setMode } = useTheme();

    const handleThemeToggle = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };

    return (
        <div
            className={`min-h-screen ${mode === 'dark' ? 'bg-gradient-to-br from-slate-900 to-indigo-950' : ''} 
        relative`}
            data-oid="hi3wvtz"
        >
            <nav
                className={`${mode === 'dark' ? 'bg-white/10 border-white/10' : 'bg-slate-800/10 border-slate-800/10'} backdrop-blur-sm border-b sticky top-0 w-full z-10`}
                data-oid="0q4vcpj"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="i2sf29b">
                    <div className="flex items-center justify-between h-16" data-oid="hd9g2zf">
                        <div className="flex items-center" data-oid="3b9:w7.">
                            <div
                                className={`${mode === 'dark' ? 'text-white' : 'text-slate-800'} font-bold text-2xl`}
                                data-oid="tbsw3s9"
                            >
                                DroneHub
                            </div>
                        </div>
                        <div className="flex space-x-4 items-center" data-oid="dkxhs5g">
                            <button
                                onClick={handleThemeToggle}
                                className={`px-3 py-2 rounded-lg ${mode === 'dark' ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-slate-800/10 text-slate-800 hover:bg-slate-800/20'}`}
                            >
                                {mode === 'light' ? '🌙 ダーク' : '☀️ ライト'}
                            </button>
                            <button
                                className={`${mode === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-slate-900'} px-3 py-2`}
                                data-oid="1g72cr_"
                            >
                                ログイン
                            </button>
                            <button
                                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                                data-oid="xvg4sif"
                            >
                                新規登録
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-oid="t8lv2sp">
                <div className="text-center mb-16" data-oid="jcvtzh3">
                    <h1
                        className={`text-5xl font-bold ${mode === 'dark' ? 'text-white' : 'text-slate-800'} mb-4`}
                        data-oid="hh27f.j"
                    >
                        次世代ドローン管理プラットフォーム
                    </h1>
                    <Typography variant="lg" mb={4}>
                        飛行許可申請から経路計画まで、すべてをシームレスに
                    </Typography>
                    {/* <p className={`text-xl ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} data-oid="u2zb.24">
                        飛行許可申請から経路計画まで、すべてをシームレスに
                    </p> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" data-oid="20rulmg">
                    {[...Array(3)].map((_, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500 transition-all"
                            data-oid="s0y4p:h"
                        >
                            <div
                                className="h-12 w-12 bg-indigo-600 rounded-lg mb-4 flex items-center justify-center"
                                data-oid="43ebczi"
                            >
                                <svg
                                    className="h-6 w-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="jn7fido"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                        data-oid="x_tf_rb"
                                    />
                                </svg>
                            </div>
                            <h3 className={`${mode === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                                飛行許可申請
                            </h3>
                            <p className="text-gray-400" data-oid="x0_2vh8">
                                簡単な手順で飛行許可申請を完了。申請状況もリアルタイムで確認可能。
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    className={`${mode === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-800/5 border-slate-800/10'} backdrop-blur-lg rounded-xl p-8 border`}
                    data-oid="p3hh1yg"
                >
                    <div className="flex space-x-4 mb-6" data-oid="qtaugmx">
                        {['flight', 'manage', 'route'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-lg ${activeTab === tab ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'}`}
                                data-oid={`${tab}-button`}
                            >
                                {tab === 'flight' && '飛行許可'}
                                {tab === 'manage' && '機体管理'}
                                {tab === 'route' && '経路計画'}
                            </button>
                        ))}
                    </div>

                    <div
                        className={`h-96 ${mode === 'dark' ? 'bg-white/5' : 'bg-slate-800/5'} rounded-lg border ${mode === 'dark' ? 'border-white/10' : 'border-slate-800/10'} px-6 py-4`}
                        data-oid="8gd7qu5"
                    >
                        <div
                            className="flex flex-col items-center justify-center px-8 py-8 h-full"
                            data-oid="1.86st4"
                        >
                            <div className="grid gap-4">
                                <Typography variant="xl" mb={2}>
                                    {activeTab === 'flight' && '飛行許可'}
                                    {activeTab === 'manage' && '機体管理'}
                                    {activeTab === 'route' && '経路計画'}
                                </Typography>
                                <Typography variant="xs" mb={2}>
                                    {activeTab === 'flight' &&
                                        '簡単な手順で飛行許可申請を完了。申請状況もリアルタイムで確認可能。'}
                                    {activeTab === 'manage' &&
                                        'ドローン機体の詳細情報を一元管理。メンテナンス履歴も簡単に記録。'}
                                    {activeTab === 'route' &&
                                        'MapLibreを使用した高精度な飛行経路の設計と管理が可能。'}
                                </Typography>

                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                    data-oid="a879-fg"
                                >
                                    <CustomSelect
                                        label="色を選択"
                                        multiple
                                        options={[
                                            { label: '赤', value: 'red' },
                                            { label: '青', value: 'blue' },
                                            { label: '黄', value: 'yellow' },
                                        ]}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer
                className={`${mode === 'dark' ? 'bg-white/10 border-white/10' : 'bg-slate-800/10 border-slate-800/10'} backdrop-blur-sm border-t mt-10 sticky bottom-0 w-full z-10`}
                data-oid="l2pup6r"
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3" data-oid="x0vgsqd">
                    <div
                        className={`text-center ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                        data-oid="qvnse58"
                    >
                        <p data-oid="qh50-8i">© 2024 DroneHub. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
